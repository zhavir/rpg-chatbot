// components/SetupWizard/SetupWizard.js
import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import NameInput from './NameInput';
import ClassSelection from './ClassSelection';
import BackgroundInput from './BackgroundInput';
import { useRouter } from 'next/router';

const SetupWizard = () => {
  const { updateUserData } = useContext(UserContext);
  const router = useRouter();

  const handleNameChange = (name) => {
    updateUserData({ name });
  };

  const handleClassSelect = (role) => {
    updateUserData({ role });
  };

  const handleBackgroundChange = (background) => {
    updateUserData({ background });
  };

  const startGame = () => {
    // Redirect to the game page
    router.push('/game');
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Setup Wizard</h1>
      <NameInput onChange={handleNameChange} />
      <ClassSelection onSelect={handleClassSelect} />
      <BackgroundInput onChange={handleBackgroundChange} />
      <button
        onClick={startGame}
        className="mt-4 w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        Start Game
      </button>
    </div>
  );
};

export default SetupWizard;
