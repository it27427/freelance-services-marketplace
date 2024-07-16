import firebaseApp from '@/config/firebase.connection';
import { uploadBytes, ref, getDownloadURL, getStorage } from 'firebase/storage';

export const uploadFileToFirebaseAndReturnUrl = async (file: File) => {
  try {
    const storage = getStorage(firebaseApp);
    const fileRef = ref(storage, file.name);
    const snapShot = await uploadBytes(fileRef, file);
    const downloadURL = await getDownloadURL(snapShot.ref);

    return downloadURL;
  } catch (error: any) {
    throw new Error(error.message);
  }
};