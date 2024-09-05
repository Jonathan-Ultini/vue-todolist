// milestone 1
const { createApp } = Vue;

createApp({
  data() {
    return {
      // Creare la struttura dati
      todos: [
        { text: 'Studiare Vue.js', done: false },
        { text: 'Fare esercizio di programmazione', done: false },
        { text: 'Completare il progetto', done: true }
      ]
    };
  }
}).mount('#app');

//milestone 2
//1. aggiungere il ulsante "X"
//2. funzione di eliminazione

//milestone 3
//1. campo input e pulsante inserimento
//2. aggiungere nuovo todo

//bonus
//1. evento click al testo
//2. invertire valore della proprietà al click