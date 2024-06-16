// components/SetupWizard/BackgroundInput.js
import React, { useState } from 'react';

const BackgroundInput = ({ onChange }) => {
  const [background, setBackground] = useState('');

  const handleBackgroundChange = (e) => {
    const newBackground = e.target.value;
    setBackground(newBackground);
    onChange(newBackground);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="background">
        Background
      </label>
      <textarea
        id="background"
        value={background}
        onChange={handleBackgroundChange}
        placeholder="Enter your background story"
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );
};

export default BackgroundInput;
