import React from 'react';
import AddGameForm from '../../components/games/forms/AddGameForm';

const AddGamePage = () => {
  const handleFormSubmit = () => {
    console.log('Add Game Form submitted!');
  };

  return (
    <div>
      <h2>Add New Game</h2>
      <AddGameForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default AddGamePage;