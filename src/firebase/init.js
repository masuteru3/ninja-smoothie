import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyDM_Cq_HlwQCQTqUqVYF26KucrShzOmRfY",
  authDomain: "sample-cf738.firebaseapp.com",
  databaseURL: "https://sample-cf738.firebaseio.com",
  projectId: "sample-cf738",
  storageBucket: "sample-cf738.appspot.com",
  messagingSenderId: "32689875336",
  appId: "1:32689875336:web:80f5159fd3ba411780b23d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export forestore database
export default firebaseApp.firestore()


// import { firebase } from '@firebase/app'
// import '@firebase/firestore'

// var firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyDM_Cq_HlwQCQTqUqVYF26KucrShzOmRfY",
//   authDomain: "sample-cf738.firebaseapp.com",
//   databaseURL: "https://sample-cf738.firebaseio.com",
//   projectId: "sample-cf738",
//   storageBucket: "sample-cf738.appspot.com",
//   messagingSenderId: "32689875336",
//   appId: "1:32689875336:web:80f5159fd3ba411780b23d"
// });

// export const db = firebaseApp.firestore()


// import { firebase } from '@firebase/app'
// import '@firebase/firestore'

// var firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyB1pf8VM_set0vkw4slbbyyB4_ABCCfhYs",
//   authDomain: "ninja-smoothie-ec419.firebaseapp.com",
//   databaseURL: "https://ninja-smoothie-ec419.firebaseio.com",
//   projectId: "ninja-smoothie-ec419",
//   storageBucket: "ninja-smoothie-ec419.appspot.com",
//   messagingSenderId: "245520584262",
//   appId: "1:245520584262:web:235ff161db60fb36dec447"
// });

// export const db = firebaseApp.firestore()





// // Firebase App (the core Firebase SDK) is always required and
// // must be listed before other Firebase SDKs
// import * as firebase from "firebase/app";

// // Add the Firebase services that you want to use
// import "firebase/auth";
// import "firebase/firestore";

// // TODO: Replace the following with your app's Firebase project configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyDM_Cq_HlwQCQTqUqVYF26KucrShzOmRfY",
//   authDomain: "sample-cf738.firebaseapp.com",
//   databaseURL: "https://sample-cf738.firebaseio.com",
//   projectId: "sample-cf738",
//   storageBucket: "sample-cf738.appspot.com",
//   messagingSenderId: "32689875336",
//   appId: "1:32689875336:web:5c8d8351e9320cff80b23d"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);