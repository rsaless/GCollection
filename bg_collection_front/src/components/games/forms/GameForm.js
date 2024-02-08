import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useGameContext } from '../../../utils/GameContext';

const GameForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [minPlayers, setMinPlayers] = useState('');
  const [maxPlayers, setMaxPlayers] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data as needed

    // Prepare game data
    const gameData = {
      name,
      location,
      minPlayers,
      maxPlayers,
    };

    // Pass the game data to the parent component for submission
    onSubmit(gameData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="location">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="minPlayers">
        <Form.Label>Minimum Players</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter minimum players"
          value={minPlayers}
          onChange={(e) => setMinPlayers(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="maxPlayers">
        <Form.Label>Maximum Players</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter maximum players"
          value={maxPlayers}
          onChange={(e) => setMaxPlayers(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};


export default GameForm;

/*
const GameForm = ({ onSubmit }) => {



  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={gameData.name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="location">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter location"
          value={gameData.location}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="minPlayers">
        <Form.Label>Minimum Players</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter minimum players"
          value={gameData.minPlayers}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="maxPlayers">
        <Form.Label>Maximum Players</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter maximum players"
          value={gameData.maxPlayers}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default GameForm;

*/