import { initializeApp } from 'firebase/app';
import config from './config';

const apiKey = config.firebase.apiKey;
const authDomain = config.firebase.authDomain;
const projectId = config.firebase.projectId;
const storageBucket = config.firebase.storageBucket;
const messagingSenderId = config.firebase.messagingSenderId;
const appId = config.firebase.appId;
const measurementId = config.firebase.measurementId;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
