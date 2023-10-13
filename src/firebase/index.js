import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, get, child, push } from 'firebase/database'
import { getStorage } from 'firebase/storage'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ref as vueRef } from 'vue'



const firebaseConfig = {
  apiKey: 'AIzaSyD_IkjoEZXi33gGFxKJJRehF-Ui-nLtfq0',
  authDomain: 'test-vue3-1d580.firebaseapp.com',
  databaseURL: 'https://test-vue3-1d580-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'test-vue3-1d580',
  storageBucket: 'test-vue3-1d580.appspot.com',
  messagingSenderId: '846720212172',
  appId: '1:846720212172:web:6628bee24aae2e79167669',
  measurementId: 'G-EDWNDRS2CN'
}

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)
const auth = getAuth()
export const user = vueRef(auth.currentUser)
export const projectStorage = getStorage(app)

export const writeDb = (data, path) => {
  const newPostRef = push(ref(db, path))
  set(newPostRef, data)
    .then(() => {
      console.log(data)
      return true
    })
    .catch((err) => {
      console.log(err)
      return false
    })
}

export const readList = (bag, path) => {
  const refdb = ref(db)
  get(child(refdb, path))
    .then((snapshot) => {
      if (snapshot.exists()) {
        if (snapshot.val() != '') {
          bag.value = snapshot.val()
        } else {
          bag.value = {}
        }
      }
    })
    .catch((error) => {
      console.log(error)
      return false
    })
}

export const readArticle = (articleId) => { }

auth.onAuthStateChanged((newUser) => {
  user.value = newUser;
});

export const signup = (email, password, confirmPassword) => {
  if (password != confirmPassword) {
    alert('password do not match')
    return
  }
  else {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        user.value = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
}