import {config} from '../firebaseConfig'
import * as firebase from "firebase";

firebase.initializeApp(config)

const db = firebase.firestore()

export const store = {
    db: db,
};
