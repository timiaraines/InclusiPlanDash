import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Landing from './landing/landing'; // Ensure this is the correct path to your Landing component
import SignIn from './sign-in/signin'; 
import SignUp from './sign-up/signup'; 

function App() {
  return (
    <Router>
      <div>
        {/* Navigation links */}
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/signin">Sign In</Link> | 
          <Link to="/signup">Sign Up</Link>
        </nav>

        {/* Route configuration */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



