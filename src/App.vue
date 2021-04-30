<template>
<div id="logo">
  <img  alt="Vue logo" src="./assets/logo.svg">
  <h1>Todo List</h1>
</div>
  <div id="nav">
    <router-link to="/">Todos</router-link> 
    <router-link to="/active">Active</router-link> 
      <router-link to="/completed">Completed</router-link>
  </div>
  <form ref="addTodo" @submit.prevent="handleSubmit" id="add-todo">
   
    <input  v-model="todoName" autocomplete="off" placeholder="Type and press enter" type="text">
  </form>
  <router-view/>
</template>


<script>
import { v4 as uuidv4 } from 'uuid';
export default {
  name: 'App', 
  data() {
    return {
      todoName: ''
    }
  },
  methods: {
    handleSubmit () {
      // add new todo to store
      if(this.todoName) {
        this.$store.dispatch('setTodo', {
          id: uuidv4(),
          name: this.todoName,
          status: 'active'
      });
        
      }
    
      // reset input
      this.$refs.addTodo.reset(); 
    }
  }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  color: #2c3e50;
  max-width: 450px;
  margin: auto;
   #logo {
     display: flex;
     align-items:center;
     justify-content: flex-start;
      img{
        margin-right: 10px;
        max-width: 40px;
      }
   }
  #nav {
    margin-bottom: 30px;
  a {
    margin-right: 15px;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#add-todo {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  
  input{
    border-radius: 5px;
    outline: none;
    padding: 10px 15px;
    border: 1px solid #dedddd;

    &:focus{
      border-color: #2c3e50;
     
    }
  }
}
}

</style>


