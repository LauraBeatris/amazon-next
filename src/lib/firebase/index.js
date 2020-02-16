import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyAFbbMw2dhOQtxGIVnWkYaielwElo_X3J4',
    authDomain: 'next-ae1f2.firebaseapp.com',
    databaseURL: 'https://next-ae1f2.firebaseio.com',
    projectId: 'next-ae1f2',
    storageBucket: 'next-ae1f2.appspot.com',
    messagingSenderId: '761032967022',
    appId: '1:761032967022:web:859d1ce3a5ba7f5c98f77f',
    measurementId: 'G-E8ZE4TQ0TW',
};

// Verifying if the app to see if its loaded and then initialize it
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Verifying the connection
// firebase.database() => Firebase database related features
firebase
    .database()
    .ref()
    .set({
        name: 'iPhone',
    });
