<template>
  <div class="stats">
    <h1>A Different Components</h1>
    <p>There are currently {{countLinks}} links</p>
    <button v-on:click="removeAllLinks">Remove All</button>
    <p>{{msg}}</p>
  </div>
</template>

<script>

import {mapGetters , mapActions , mapMutations} from "vuex";

export default {
  name: 'stats',
  data(){
    return{
      msg:''
    }
  },
  computed:{
    ...mapGetters([
      'countLinks'
    ])
  },
  methods:{
    ...mapMutations([
      'REMOVE_ALL'
    ]),
    ...mapActions([
      'removeAll'
    ]),
    removeAllLinks(){
      this.removeAll().then(()=>{
        this.msg = 'They have been removed'
      })
    }
  }
}
</script>

<style>
 html, #app, .home {
    height: 100%;
  }
  body {
    background-color: #F4F4F4;
    margin: 0;
    height: 100%;
  }

  .hello {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 100%;
    grid-template-areas:
      "left right";
    height: 100%;
  }

  .left, .right {
    padding: 30px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  ul li {
    padding: 20px;
    background: white;
    margin-bottom: 8px;
  }

  .right {
    grid-area: right;
    background-color: #E9E9E9;
  }
  button{
    padding: 10px;
    margin-top: 30px;
    width: 100%;
    background: none;
    border: 1px solid lightgray;
    outline: 0;
    cursor: pointer;
  }

</style>
