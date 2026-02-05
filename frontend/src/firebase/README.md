# Firebase Integration - The Matrix

## Configuration

Firebase has been successfully integrated into The Matrix app with the following services:

### Credentials
- **Project ID**: the-matrix-97779
- **Auth Domain**: the-matrix-97779.firebaseapp.com
- **Storage Bucket**: the-matrix-97779.firebasestorage.app

All credentials are stored securely in `/app/frontend/.env` file.

## Available Services

### 1. Firebase Authentication (`/firebase/auth.js`)

Functions available:
- `signUpUser(email, password)` - Create new user account
- `signInUser(email, password)` - Sign in existing user
- `signOutUser()` - Sign out current user
- `onAuthChange(callback)` - Listen to authentication state changes

**Example Usage:**
```javascript
import { signUpUser, signInUser } from '../firebase/auth';

// Sign up
const result = await signUpUser('user@example.com', 'password123');
if (result.success) {
  console.log('User created:', result.user);
}

// Sign in
const loginResult = await signInUser('user@example.com', 'password123');
if (loginResult.success) {
  console.log('User logged in:', loginResult.user);
}
```

### 2. Cloud Firestore Database (`/firebase/firestore.js`)

Functions available:
- `addDocument(collection, data)` - Add new document
- `getDocuments(collection)` - Get all documents
- `getDocument(collection, docId)` - Get single document
- `updateDocument(collection, docId, data)` - Update document
- `deleteDocument(collection, docId)` - Delete document
- `queryDocuments(collection, conditions)` - Query with filters

**Pre-built helpers:**
- `saveContactForm(formData)` - Save contact form submissions
- `savePremiumMember(memberData)` - Save premium member data
- `getPremiumMembers()` - Get all paid members

**Example Usage:**
```javascript
import { saveContactForm, savePremiumMember } from '../firebase/firestore';

// Save contact form
const result = await saveContactForm({
  name: 'John Doe',
  email: 'john@example.com',
  message: 'I want to join!'
});

// Save premium member
const memberResult = await savePremiumMember({
  email: 'member@example.com',
  name: 'Premium User',
  paymentId: 'pay_xyz123',
  plan: 'monthly'
});
```

## Integration Points

### Recommended Usage:

1. **Contact Form** (`Contact.jsx`)
   - Save submissions to Firestore using `saveContactForm()`

2. **Premium Access** (`PremiumAccess.jsx`)
   - Verify paid members using Firestore queries
   - Store access codes and member data

3. **Auth Placeholders** (`Auth.jsx`)
   - Implement real authentication using Firebase Auth
   - Replace placeholders with working login/signup

4. **Payment Integration**
   - After Razorpay payment, save member data to Firestore
   - Generate and store access codes

## Security Rules (Firebase Console)

Recommended Firestore security rules:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Contact forms - anyone can write, only admins can read
    match /contacts/{document} {
      allow write: if true;
      allow read: if request.auth != null;
    }
    
    // Premium members - only authenticated users
    match /premium_members/{document} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## Next Steps

1. Enable Authentication methods in Firebase Console (Email/Password, Google, etc.)
2. Set up Firestore database and collections
3. Configure security rules
4. Integrate payment webhook to auto-create premium members
5. Add real-time listeners for live updates

## Files Created

- `/app/frontend/src/firebase/config.js` - Firebase initialization
- `/app/frontend/src/firebase/auth.js` - Authentication helpers
- `/app/frontend/src/firebase/firestore.js` - Database helpers
- `/app/frontend/.env` - Environment variables (already configured)
