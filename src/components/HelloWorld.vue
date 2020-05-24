<template>
  <div class="hello">
    <div class="left">
      <h1>{{title}}</h1>

      <form @submit.prevent="addLink">
        <input type="text" class="link-input" v-model="newLink" placeholder="add new link" />
      </form>

      <ul>
        <li v-for="(link , index) in links" :key="index">
          {{link}}
          <button v-on:click="removeLinks(index)" class="rm">Remove</button>
        </li>
      </ul>
    </div>
    <div class="right">
      <stats />
    </div>
  </div>
</template>

<script>
import Stats from '../components/Stats';
import { mapState , mapMutations ,mapActions } from "vuex";

export default {
  name: 'HelloWorld',
  data(){
    return {
      newLink:''
    }
  },
  components:{
    Stats
  },
  methods:{
    ...mapMutations([
      'ADD_LINK'
    ]),
    ...mapActions([
      'removeLink'
    ]),
    addLink:function(){
      this.ADD_LINK(this.newLink)
      this.newLink =''
    },
    removeLinks:function(link){
      this.removeLink(link)
    }
  },
  computed : {
    ...mapState([
      'title',
      'links'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 10px 10px;
}
a {
  color: #42b983;
}
input{
  border: none;
  padding: 20px;
  width: calc(100% - 40px);
  box-shadow: 0 5px 5px lightgray;
  margin-bottom: 50px;
  outline: none;
}

.rm{
  float: right;
  text-transform: uppercase;
  font-size: 0.8em;
  background: #f0d0e3;
  border: none;
  padding: 5px;
  color: #ff0076;
  cursor: pointer;
  margin: 3px;
}
</style>
