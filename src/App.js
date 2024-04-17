import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from './landing/landing'; 
import SignIn from './sign-in/signin'; 
import SignUp from './sign-up/signup'; 
import Chat from './chat/chat';
import Dashboard from './dashboard/dashboard';
import QuillEditor from './textEditor/QuillEditor';
import Document from './documents/documents';
import About from './about/about';
import Contact from './contact/contact';
import Services from './services/services';
import Goals from './goals/goals';
import Scheduler from './calendar/calendar';


function App() {
  return (
    
    <Router>
      <div>
        {/* Route configuration */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/quilleditor" element={<QuillEditor />} />
          <Route path="/documents" element={<Document />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/student-goals" element={<Goals />} />
          <Route path="calendar" element={<Scheduler />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



