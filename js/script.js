const { createApp } = Vue;

createApp({
  data() {
    return {
      newTodo: '',
      todos: [
        { text: 'Studiare Vue.js', done: false },
        { text: 'Fare esercizio di programmazione', done: false },
        { text: 'Completare il progetto', done: true }
      ]
    };
  },
  methods: {
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    addTodo() {
      if (this.newTodo.trim() !== '') {
        this.todos.push({ text: this.newTodo, done: false });
        this.newTodo = '';
      }
    },
    // Funzione per invertire 'done'
    toggleDone(todo) {
      todo.done = !todo.done;
    }
  }
}).mount('#app');

//bonus
//1. evento click al testo (done)
//2. invertire valore della proprietà al click (done)