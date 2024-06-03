// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes component
import NavBar from './components/nav_bar.components';
import HomePage from './HomePage';
import IndomiePage from './IndomiePage';
import PopMiePage from './PopMiePage';
import ChocRockPage from './ChocRockPage';
import SupportPage from './SupportPage';

function App() {
  return (
    <Router>
      <div>
        <NavBar
          logo="/logo-indomie.png"
          navs={[
            ['Home', '/'],
            ['Indomie', '/indomie'],
            ['PopMie', '/popmie'],
            ['ChocRock', '/chocrock'],
            ['Support', '/support'],
            ['Mini Game', 'https://www.indomie.com/indomieland/index.html']
          ]}
        />
        <Routes> {/* Wrap Routes around Route components */}
          <Route path="/" element={<HomePage />} />
          <Route path="/indomie" element={<IndomiePage />} />
          <Route path="/popmie" element={<PopMiePage />} />
          <Route path="/chocrock" element={<ChocRockPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
