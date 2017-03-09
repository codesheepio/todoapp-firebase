import firebase from 'firebase/app';
import 'firebase/database';
import config from '../config';

firebase.initializeApp(config);

const database = firebase.database();

const fetchTodos = callback => {
  const todos = [
    { id: 1, text: 'Drink Coffee', complete: false },
    { id: 2, text: 'Feed Cat', complete: true },
    { id: 3, text: 'Sleep', complete: false },
  ];
  callback(todos);
};

export { fetchTodos };
