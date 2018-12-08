import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { FirestoreProvider } from 'react-firestore';

import App from './App';
import * as serviceWorker from './serviceWorker';

const config = {
  apiKey: 'AIzaSyCnt_hFF7wwAz8iEM8maeuSsVFKCqix6Ng',
  authDomain: 'amigo-secreto-bbe75.firebaseapp.com',
  databaseURL: 'https://amigo-secreto-bbe75.firebaseio.com',
  projectId: 'amigo-secreto-bbe75',
  storageBucket: 'amigo-secreto-bbe75.appspot.com',
  messagingSenderId: '569745142440',
};

firebase.initializeApp(config);

ReactDOM.render(
  <FirestoreProvider firebase={firebase} useTimestampsInSnapshots>
    <App />
  </FirestoreProvider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
