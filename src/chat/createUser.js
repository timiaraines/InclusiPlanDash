const axios = require('axios');

// Firebase user information
const firebaseUser = {
  displayName: "Bob Baker",
  email: "b_baker@mail.com",
  // Add other relevant user information here
};

// Map Firebase user data to ChatEngine user data
const chatEngineUser = {
  username: firebaseUser.email, // You can use email or any other unique identifier from Firebase
  secret: "your-secret-key", // Replace with your ChatEngine secret key
  email: firebaseUser.email,
  first_name: firebaseUser.displayName.split(" ")[0],
  last_name: firebaseUser.displayName.split(" ")[1],
  // Add other relevant user information here
};

// Make a POST request to create a new user in ChatEngine
axios.post('https://api.chatengine.io/users/', chatEngineUser, {
  headers: {
    'PRIVATE-KEY': 'fdde722e-2b0d-416c-90a9-68f25eeec90c', // Replace with your ChatEngine private key
    'Content-Type': 'application/json'
  }
})
  .then((response) => {
    console.log('User created successfully:', response.data);
  })
  .catch((error) => {
    console.error('Error creating user:', error.response.data);
  });
