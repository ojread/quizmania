// Set up our Firebase instance.
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/performance";
import "firebase/analytics";

// Initialise with env vars supplied by @rollup/plugin-replace.
if (env.firebaseConfig.apiKey) {
  firebase.initializeApp(env.firebaseConfig);
} else {
  console.error("Please supply your Firebase config as environment vars.");
}

export default firebase;
