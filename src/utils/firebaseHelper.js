import firebase from 'firebase/app';
import 'firebase/database';
import config from '../config';

firebase.initializeApp(config);

const database = firebase.database();

const syncTodos = callback => {
  database.ref('todos').on('value', snapshot => {
    const todos = [];

    if (snapshot.val()) {
      snapshot.forEach(snap => {
        todos.push(snap.val());
      });
    }
    callback(todos);
  });
};

const saveTodos = todos => {
  todos.forEach(todo => {
    database.ref(`todos/${todo.id}`).set({
      ...todo,
    });
  });
};

export { syncTodos, saveTodos };
