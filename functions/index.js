/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

require("firebase-functions/v2/https");
// index.js

const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
admin.initializeApp();

// Export Firebase Cloud Function
exports.storeUserSecret = require("./storeUserSecret").storeUserSecret;

