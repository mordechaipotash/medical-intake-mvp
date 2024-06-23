import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HealthHistory from './components/Forms/HealthHistory';
import BehavioralInformation from './components/Forms/BehavioralInformation';
import FamilyInformation from './components/Forms/FamilyInformation';
import GeneralInformation from './components/Forms/GeneralInformation';
import LanguageAndCommunication from './components/Forms/LanguageCommunication';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <h1>Medical Intake</h1>
          <ul className="nav-links">
            <li><Link to="/health-history">Health History</Link></li>
            <li><Link to="/behavioral-information">Behavioral Information</Link></li>
            <li><Link to="/family-information">Family Information</Link></li>
            <li><Link to="/general-information">General Information</Link></li>
            <li><Link to="/language-communication">Language & Communication</Link></li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/health-history" element={<HealthHistory />} />
            <Route path="/behavioral-information" element={<BehavioralInformation />} />
            <Route path="/family-information" element={<FamilyInformation />} />
            <Route path="/general-information" element={<GeneralInformation />} />
            <Route path="/language-communication" element={<LanguageAndCommunication />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
