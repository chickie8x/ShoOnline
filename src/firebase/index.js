import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, get , child } from 'firebase/database'

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

export const writeDb = (data, path) => {
  set(ref(db, path), data)
    .then(() => {
      console.log(data)
      return true
    })
    .catch((err) => {
      console.log(err)
      return false
    })
}


export const readList = (path) => {
  const refdb = ref(db)
  get(child(refdb, path)).then((snapshot) => {
    if(snapshot.exists()){
      console.log(snapshot.val())
      return snapshot.val()
    }
  }).catch((error) => {
    console.log(error)
    return false
  })
}

export const readArticle = (articleId) => {

}