import { createStore } from "vuex";

export default createStore({
  state: {
    todos: localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [],
  },
  mutations: {
    setTodo(state, payload) {
      state.todos.push(payload);
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    },
    setStatus(state, payload) {
      const currentTodo = state.todos.find((todo) => todo.id === payload.id);

      currentTodo.status = payload.status;
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    },

    removeTodo(state, payload) {
      const filteredTodos = state.todos.filter((todo) => todo.id !== payload.id);

      this.state.todos = filteredTodos;
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    },
  },
  actions: {
    setTodo(state, payload) {
      state.commit("setTodo", payload);
    },
    removeTodo(state, payload) {
      state.commit("removeTodo", payload);
    },
    setStatus(state, payload) {
      state.commit("setStatus", payload);
    },
  },
  modules: {},
  getters: {
    getTodos: (state) => state.todos,
    getActiveTodos: (state) => state.todos.filter((todo) => todo.status === "active"),
    getCompletedTodos: (state) => state.todos.filter((todo) => todo.status === "completed"),
  },
});
