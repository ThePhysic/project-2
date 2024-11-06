// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Gallery from './components/Gallery';
import Universe from './components/Universe';
import SolarSystem from './components/SolarSystem';
import News from './components/News';

function App() {
  return (
    <Router>
      <Routes>
        {/* Set Dashboard as the default component for the root path */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/universe" element={<Universe />} />
        <Route path="/solar-system" element={<SolarSystem />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;
