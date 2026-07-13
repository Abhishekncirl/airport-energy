// Centralised Firebase client (replaces the old Supabase client).
//
// Firebase web config is PUBLIC by design - the apiKey identifies the
// project, it does not grant privileges. Security is enforced by
// Firestore security rules (see firestore.rules) and Firebase Auth,
// exactly like Supabase's anon key + RLS worked before.
//
// Fill in FIREBASE_CONFIG with the values from:
//   Firebase console -> Project settings -> General -> Your apps -> Web app
//
// While the config is empty, `isFirebaseConfigured` is false and the site
// falls back to seeded fuel prices; the admin panel shows a clear
// "not configured" notice. Nothing crashes.
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const FIREBASE_CONFIG = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

export const isFirebaseConfigured = Boolean(
  FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.projectId && FIREBASE_CONFIG.appId
);

const app = isFirebaseConfigured ? initializeApp(FIREBASE_CONFIG) : null;

export const auth = app ? getAuth(app) : null;
export const db = app ? getFirestore(app) : null;
