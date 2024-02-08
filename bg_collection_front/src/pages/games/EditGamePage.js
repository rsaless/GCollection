import React from 'react';
import EditGameForm from '../../components/games/forms/EditGameForm';

const EditGamePage = () => {
  const handleFormSubmit = () => {
    console.log('Edit Game Form submitted!');
  };

  // Assume gameData is passed as a prop or fetched from context
  const gameData = {
    _id: '123', // Replace with the actual game ID
    name: 'Sample Game',
    location: 'Living Room',
    minPlayers: 2,
    maxPlayers: 4,
    // ... other game properties
  };

  return (
    <div>
      <h2>Edit Game</h2>
      <EditGameForm gameData={gameData} onSubmit={handleFormSubmit} />
    </div>
  );
};

export default EditGamePage;