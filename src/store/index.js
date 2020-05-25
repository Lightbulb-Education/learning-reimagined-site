import * as firebase from "firebase";
import Cookies from 'js-cookie'

export const config = {
    apiKey: "AIzaSyCPWWZo4OWApgWLuaNc-AbIA-mzmgTkkXQ",
    authDomain: "learning-reimagined-site.firebaseapp.com",
    databaseURL: "https://learning-reimagined-site.firebaseio.com",
    projectId: "learning-reimagined-site",
    storageBucket: "learning-reimagined-site.appspot.com",
    messagingSenderId: "882472229700",
    appId: "1:882472229700:web:39c1bad1e05bb1aa581511",
    measurementId: "G-D2H7K02NKY"
};

firebase.initializeApp(config)
const db = firebase.firestore()

const formClosed = Cookies.get('formClosed')

export const store = {
    db: db,
    formClosed: formClosed
};
