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
  apiKey: 'AIzaSyAWcCW9moE1ktt6q0y4Tq_R4eF0fG3i7YA',
  authDomain: 'airport-energy.firebaseapp.com',
  projectId: 'airport-energy',
  storageBucket: 'airport-energy.firebasestorage.app',
  messagingSenderId: '425151450270',
  appId: '1:425151450270:web:dcfbf376ac5044326e7f8f',
};

export const isFirebaseConfigured = Boolean(
  FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.projectId && FIREBASE_CONFIG.appId
);

const app = isFirebaseConfigured ? initializeApp(FIREBASE_CONFIG) : null;

export const auth = app ? getAuth(app) : null;
export const db = app ? getFirestore(app) : null;
