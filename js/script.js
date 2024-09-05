// milestone 1
const { createApp } = Vue;

createApp({
  data() {
    return {
      todos: [
        { text: 'Studiare Vue.js', done: false },
        { text: 'Fare esercizio di programmazione', done: false },
        { text: 'Completare il progetto', done: true }
      ]
    };
  },
  methods: {
    // Funzione di eliminazione - milestone 2
    deleteTodo(index) {
      this.todos.splice(index, 1);
    }
  }
}).mount('#app');

//milestone 3
//1. campo input e pulsante inserimento
//2. aggiungere nuovo todo

//bonus
//1. evento click al testo
//2. invertire valore della proprietà al click