import db from './firebase'; // Ensure this imports your Firebase config correctly
import { collection, getDocs, addDoc, query, orderBy, serverTimestamp } from 'firebase/firestore';

/**
 * Retrieves documents from 'documents' collection, ordered by creation time in descending order.
 * @returns {Promise<Array>} A promise that resolves to an array of document data.
 */
export const getDocuments = async () => {
  const q = query(collection(db, 'documents'), orderBy('createdAt', 'desc'));
  try {
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Failed to retrieve documents:", error);
    throw error;  // Re-throwing the error is useful if you want calling code to handle it.
  }
};

/**
 * Adds a new document to the 'documents' collection with a server-generated timestamp.
 * @param {Object} document The document to add.
 * @returns {Promise<void>}
 */
export const addDocument = async (document) => {
  try {
    await addDoc(collection(db, 'documents'), {
      ...document,
      createdAt: serverTimestamp() // Using Firestore serverTimestamp
    });
  } catch (error) {
    console.error("Failed to add document:", error);
    throw error;
  }
};



