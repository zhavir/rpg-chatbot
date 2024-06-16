// components/SetupWizard/ClassSelection.js
import React, { useState } from 'react';

const ClassSelection = ({ onSelect }) => {
  const [selectedClass, setSelectedClass] = useState('');

  const handleClassSelect = (e) => {
    const newClass = e.target.value;
    setSelectedClass(newClass);
    onSelect(newClass);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="class">
        Class
      </label>
      <select
        id="class"
        value={selectedClass}
        onChange={handleClassSelect}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="">Select your class</option>
        <option value="Knight">Knight</option>
        <option value="Sorcerer">Sorcerer</option>
        <option value="Rogue">Rogue</option>
        {/* Add more classes as needed */}
      </select>
    </div>
  );
};

export default ClassSelection;
