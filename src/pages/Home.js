import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import ToggleSwitch from './component/ToggleSwitch';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const handleSearch = (city) => {
    navigate(`/weather/${city}`);
  };

  return (
    <div className="home-page">
      <div className="top-bar">
        <h1 className="app-title">WEATHER APPLICATION</h1>
        {/* Passing darkMode and setDarkMode as props */}
        <ToggleSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div className="intro-content">
        <SearchBar onSearch={handleSearch} />
      </div>
    </div>
  );
}
