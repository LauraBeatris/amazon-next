import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: 'next-ae1f2.firebaseapp.com',
    databaseURL: 'https://next-ae1f2.firebaseio.com',
    projectId: 'next-ae1f2',
    storageBucket: 'next-ae1f2.appspot.com',
    messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Verifying if the app to see if its already loaded and then initialize it
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const database = firebase.database();

// Nested Value
// database.ref('location/city').set('Hey')

// database.ref('attributes/height').set('1.65')
// database.ref('attributes/width').set('76')
// database.ref('attributes').set({ width: 78, height: 168 })

// database.ref().update({'location/city': 'Boston'})
