import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import GameForm from '../components/GameForm';

const EditGame = ({ match }) => {
  const gameId = match.params.id;
  const [gameData, setGameData] = useState({});
  const history = useHistory();

  useEffect(() => {
    // Fetch game data based on gameId and set it to gameData state
    // You can use a GET request to your backend endpoint for fetching the game details
    // Example: fetch(`/api/games/${gameId}`)
    //   .then(response => response.json())
    //   .then(data => setGameData(data))
    //   .catch(error => console.error('Error:', error));

    // For demonstration, initializing with sample data
    setGameData({
      name: 'Sample Game',
      location: 'Sample Location',
      minPlayers: 2,
      maxPlayers: 4,
      // Add other game properties
    });
  }, [gameId]);

  const handleUpdate = (updatedGameData) => {
    // Send a PUT request to update the game on the backend
    // Example: fetch(`/api/games/${gameId}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(updatedGameData),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     // Handle the updated game data
    //   })
    //   .catch(error => console.error('Error:', error));

    // For demonstration, logging the updated game data
    console.log('Updated Game Data:', updatedGameData);

    // Redirect to the game details page after updating
    history.push(`/games/${gameId}`);
  };

  return (
    <div>
      <h2>Edit Game</h2>
      <GameForm onSubmit={handleUpdate} initialValues={gameData} />
      <Button variant="danger" onClick={() => history.push(`/games/${gameId}`)}>
        Cancel
      </Button>
    </div>
  );
};

export default EditGame;