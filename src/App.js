import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignIn from './sign-in/signin'; // Adjust path as necessary
import SignUp from './sign-up/signup'; // Adjust path as necessary

function App() {
  return (
    <Router>
      <div>
        {/* Links for navigation */}
        <nav>
          <Link to="/signin">Sign In</Link> | <Link to="/signup">Sign Up</Link>
        </nav>

        {/* Route configuration */}
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Redirect to /signin by default */}
          <Route path="/" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


