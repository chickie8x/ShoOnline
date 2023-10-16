import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, get, child, push } from 'firebase/database'
import { getStorage } from 'firebase/storage'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut  } from "firebase/auth";
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
export const loginErrorMessage = vueRef(undefined)
export const signupErrorMessage = vueRef(undefined)

export const writeDb = (data, path) => {
  const newPostRef = push(ref(db, path))
  set(newPostRef, data)
    .then(() => {
      console.log(data)
      return true
    })
    .catch((err) => {
      console.log(err.code)
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

export const signup = (email, password, confirmPassword, doRedirect) => {
  if (password != confirmPassword) {
    alert('password do not match')
    return
  }
  else {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        user.value = userCredential.user;
        doRedirect()
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        signupErrorMessage.value = errorCode
        setTimeout(() => {
          signupErrorMessage.value = undefined
        }, 5000);
        // ..
      });
  }
}

export const signin = (email, password, doRedirect) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      user.value = userCredential.user;
      doRedirect()
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      loginErrorMessage.value = errorCode;
      setTimeout(() => {
        loginErrorMessage.value = undefined
      }, 5000);
    });
}

export const logout = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log('singed out', user)
  }).catch((error) => {
    // An error happened.
  });
}