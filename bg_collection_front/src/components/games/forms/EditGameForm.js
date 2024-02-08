import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useGameContext } from '../../../utils/GameContext';

const EditGameForm = ({ gameData, onSubmit }) => {
  const { editGame } = useGameContext();
  const [editedGameData, setEditedGameData] = useState(gameData);

  const handleSubmit = (event) => {
    event.preventDefault();
    editGame(gameData._id, editedGameData);
    onSubmit();
  };

  return (
    <Form onSubmit={handleSubmit}>
      
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={editedGameData.name}
          onChange={(e) => setEditedGameData({ ...editedGameData, name: e.target.value })}
        />
      </Form.Group>

      <Form.Group controlId="location">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter location"
          value={editedGameData.location}
          onChange={(e) => setEditedGameData({ ...editedGameData, location: e.target.value })}
        />
      </Form.Group>

      <Form.Group controlId="minPlayers">
        <Form.Label>Minimum Players</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter minimum players"
          value={editedGameData.minPlayers}
          onChange={(e) => setEditedGameData({ ...editedGameData, minPlayers: e.target.value })}
        />
      </Form.Group>

      <Form.Group controlId="maxPlayers">
        <Form.Label>Maximum Players</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter maximum players"
          value={editedGameData.maxPlayers}
          onChange={(e) => setEditedGameData({ ...editedGameData, maxPlayers: e.target.value })}
        />
      </Form.Group>

      <Button variant="primary" type="submit">Save Changes</Button>
    </Form>
  );
};

export default EditGameForm;