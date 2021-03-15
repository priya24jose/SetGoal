import * as firebase from 'firebase'
import '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig ={
    apiKey: 'AIzaSyDBeoFGW9DFSO5-qdH2rIa_S-V5BBEe7vE',
    authDomain: 'your-auth-domain-b1234.firebaseapp.com',
    databaseURL: 'https://your-database-name.firebaseio.com',
    projectId: 'react-native-firebase-eb08d',
    storageBucket: 'react-native-firebase-eb08d.appspot.com',
    messagingSenderId: '188243362380',
    appId: '1:188243362380:android:1b35d22a53dd111c866ae9',
  };

  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

  export {firebase};