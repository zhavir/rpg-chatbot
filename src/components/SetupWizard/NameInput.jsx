// components/SetupWizard/NameInput.js
import React, { useState } from 'react';

const NameInput = ({ onChange }) => {
  const [name, setName] = useState('');

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    onChange(newName);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Name
      </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );
};

export default NameInput;
