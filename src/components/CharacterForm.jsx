// components/CharacterForm.js
import React, { useState } from 'react';

const CharacterForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [background, setBackground] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, role, background });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Role:
        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="">Select Role</option>
          <option value="knight">Knight</option>
          <option value="sorcerer">Sorcerer</option>
          <option value="rogue">Rogue</option>
        </select>
      </label>
      <label>
        Background:
        <textarea value={background} onChange={(e) => setBackground(e.target.value)} required />
      </label>
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
        Start Game
      </button>
    </form>
  );
};

export default CharacterForm;
