// storeUserSecret.js

const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.storeUserSecret = functions.https.onCall(async (data, context) => {
  // Check if the user is authenticated
  if (!context.auth) {
    // eslint-disable-next-line max-len
    throw new functions.https.HttpsError("unauthenticated", "Only authenticated users can store secrets.");
  }

  // Get the user ID
  const userId = context.auth.uid;

  // Get the secret from the request data
  const {secret} = data;

  try {
    // Store the secret in Firestore
    await admin.firestore().collection("userSecrets").doc(userId).set({
      secret: secret,
    });

    return {success: true, message: "Secret stored successfully."};
  } catch (error) {
    // eslint-disable-next-line max-len
    throw new functions.https.HttpsError("internal", "An error occurred while storing the secret.", error);
  }
});
