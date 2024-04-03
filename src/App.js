import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Landing from './landing/landing'; 
import SignIn from './sign-in/signin'; 
import SignUp from './sign-up/signup'; 
import Chat from './chat/chat';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation links */}
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/signin">Sign In</Link> | 
          <Link to="/signup">Sign Up</Link> | 
          <Link to="/chat">Chat</Link>
        </nav>

        {/* Route configuration */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



