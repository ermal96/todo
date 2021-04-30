<template>
  <div class="todo">
   <h4>{{name}}</h4>
   <div> 
     <p @click="changeStatus" title="Change Status" :class="status">{{status}}</p>
    <button @click="deleteTodo" title="Remove Todo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/>
        <path d="M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z" fill="rgba(245,52,20,1)"/>
      </svg>
    </button>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    name: String,
    status: String
  },
  name: 'Todo',
  components: {},
  methods: {
    changeStatus() {
      this.$store.dispatch('setStatus', { id: this.id, status: this.status === "active" ? "completed": "active" })
    },
    deleteTodo() {
      this.$store.dispatch('removeTodo', { id: this.id })
    }
  }
}
</script>

<style lang="scss">
.todo {
    padding: 5px;
    border-bottom: 1px solid #dedddd;
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h4 , p{
       margin: 0;
    }
    p{  
        cursor: pointer;
        display: inline-block;
        color: white;
        padding: 0px 5px;
        font-size: 14px;
        border-radius: 5px;
        text-transform: lowercase;
        &.active {
            background: #42a6fe;
        }
         &.completed {
            background: #42b983;
        }
    }
    div{
      display: flex;
      align-items: center;
    }
    button {
      cursor: pointer;
      background: transparent;
      border: none;
      margin-left: 10px;
    }
}
</style>
