import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCDWsnbmnDNRgLV1UyMg2kgiBDXSuCws_c',
  authDomain: 'taskwave-eedd3.firebaseapp.com',
  projectId: 'taskwave-eedd3',
  storageBucket: 'taskwave-eedd3.appspot.com',
  messagingSenderId: '1045933296012',
  appId: '1:1045933296012:web:1d6b7739098257bbb52ea9',
  measurementId: 'G-DNEJ4M4VGT',
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
