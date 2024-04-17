import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase/firebase.js'; // make sure the path is correct

export const uploadDocument = async (file) => {
  if (!file) return;
  
  // Create a storage reference
  const storageRef = ref(storage, `documents/${file.name}`);
  
  // Upload file
  const snapshot = await uploadBytes(storageRef, file);
  
  // Get downloadable URL
  const downloadUrl = await getDownloadURL(snapshot.ref);
  return downloadUrl;
};
