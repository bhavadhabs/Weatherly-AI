import React from 'react';

export default function ToggleSwitch({ darkMode, setDarkMode }) {
  const handleToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={darkMode} onChange={handleToggle} />
      <span className="slider round"></span>
    </label>
  );
}
