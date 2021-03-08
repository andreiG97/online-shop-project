import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../config/firebase';

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
const providerFacebook = new firebase.auth.FacebookAuthProvider();

export function signInWithGoogle(){
    return firebase.auth().signInWithPopup(provider)

}

export function signOut(){
    return firebase.auth().signOut()
}

export function signInWithFacebook(){
    return firebase.auth().signInWithPopup(providerFacebook)
}

