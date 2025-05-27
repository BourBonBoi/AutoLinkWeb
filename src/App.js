import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import UpdatesList from './pages/UpdatesList';
import AllPosts from './pages/AllPosts';

function App() {
  return (
    <Router>
      <Header />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/updates" element={<UpdatesList />} />
          <Route path="/allPosts" element={<AllPosts />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
