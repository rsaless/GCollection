import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const DeleteGame = ({ match }) => {
  const gameId = match.params.id;
  const history = useHistory();

  const handleDelete = () => {
    // Send a DELETE request to delete the game on the backend
    // Example: fetch(`/api/games/${gameId}`, { method: 'DELETE' })
    //   .then(response => {
    //     // Handle the response
    //   })
    //   .catch(error => console.error('Error:', error));

    // For demonstration, logging a success message
    console.log('Game deleted successfully');

    // Redirect to the games list page after deleting
    history.push('/games/all');
  };

  return (
    <div>
      <h2>Delete Game</h2>
      <p>Are you sure you want to delete this game?</p>
      <Button variant="danger" onClick={handleDelete}>
        Yes, Delete
      </Button>
      <Button variant="secondary" onClick={() => history.push(`/games/${gameId}`)}>
        Cancel
      </Button>
    </div>
  );
};

export default DeleteGame;