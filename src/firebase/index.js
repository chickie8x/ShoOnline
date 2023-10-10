import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set } from 'firebase/database'

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

export const writeDb = (data, path) => {
  const db = getDatabase(app)
  set(ref(db, path), data)
    .then(() => {
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
}
