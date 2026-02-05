// Firestore Database Helper Functions
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  getDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  Timestamp 
} from 'firebase/firestore';
import { db } from './config';

// Add a new document to a collection
export const addDocument = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: Timestamp.now()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Get all documents from a collection
export const getDocuments = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const documents = [];
    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: documents };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Get a single document by ID
export const getDocument = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { success: true, data: { id: docSnap.id, ...docSnap.data() } };
    } else {
      return { success: false, error: 'Document not found' };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Update a document
export const updateDocument = async (collectionName, docId, data) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, {
      ...data,
      updatedAt: Timestamp.now()
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Delete a document
export const deleteDocument = async (collectionName, docId) => {
  try {
    await deleteDoc(doc(db, collectionName, docId));
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Query documents with filters
export const queryDocuments = async (collectionName, conditions = []) => {
  try {
    let q = collection(db, collectionName);
    
    // Apply conditions (where, orderBy, limit)
    conditions.forEach(condition => {
      if (condition.type === 'where') {
        q = query(q, where(condition.field, condition.operator, condition.value));
      } else if (condition.type === 'orderBy') {
        q = query(q, orderBy(condition.field, condition.direction || 'asc'));
      } else if (condition.type === 'limit') {
        q = query(q, limit(condition.value));
      }
    });
    
    const querySnapshot = await getDocs(q);
    const documents = [];
    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() });
    });
    
    return { success: true, data: documents };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Example: Save contact form submission
export const saveContactForm = async (formData) => {
  return addDocument('contacts', formData);
};

// Example: Save premium member data
export const savePremiumMember = async (memberData) => {
  return addDocument('premium_members', {
    ...memberData,
    isPaid: true,
    membershipStart: Timestamp.now()
  });
};

// Example: Get all premium members
export const getPremiumMembers = async () => {
  return queryDocuments('premium_members', [
    { type: 'where', field: 'isPaid', operator: '==', value: true },
    { type: 'orderBy', field: 'createdAt', direction: 'desc' }
  ]);
};
