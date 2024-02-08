import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useGameContext } from '../../../utils/GameContext';
import axios from 'axios';

const AddGameForm = ({ onSubmit }) => {
  const { addGame } = useGameContext();
  const [gameData, setGameData] = useState({
    name:'',
    state:'',
    purchaseLocation:'',
    originalPrice:'',
    currentPrice:'',
    minPlayers:'',
    maxPlayers:'',
    usesSleeve:false,
    silicaGelIndicator:false,
    rafaelPlayedIndicator:false,
    sabrinaPlayedIndicator:false,
    baseGameId:'',
    sleeves:[],
    sleeveStatus:[],
    pictures:[],
    tags:[],
    expansions:[],
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = 'Senhalegal23';

    try {
      console.log('gamedata', gameData);

      const response = await axios.post('http://localhost:3001/games/add', gameData, {
        //headers: {Authorization: `Bearer ${token}`,},
      });
  
      console.log('Game added successfully:', response.data);
      onSubmit(); // Optionally, you can reset the form or perform other actions
    } catch (error) {
      console.error('Error adding game:', error);
    }
    
  };

  return (
    <Form onSubmit={handleSubmit}>
        
      <Form.Group controlId="name"><Form.Label>Name</Form.Label><Form.Control type="text" placeholder="Enter name" value={gameData.name} onChange={(e) => setGameData({ ...gameData, name: e.target.value })}/></Form.Group>
      <Form.Group controlId="purchaseLocation"><Form.Label>Location</Form.Label><Form.Control type="text" placeholder="Enter Purchase Location" value={gameData.purchaseLocation} onChange={(e) => setGameData({ ...gameData, purchaseLocation: e.target.value })}/></Form.Group>
      <Form.Group controlId="minPlayers"><Form.Label>Minimum Players</Form.Label><Form.Control type="number" placeholder="Enter minimum players" value={gameData.minPlayers} onChange={(e) => setGameData({ ...gameData, minPlayers: e.target.value })}/></Form.Group>
      <Form.Group controlId="maxPlayers"><Form.Label>Maximum Players</Form.Label><Form.Control type="number" placeholder="Enter maximum players" value={gameData.maxPlayers} onChange={(e) => setGameData({ ...gameData, maxPlayers: e.target.value })}/></Form.Group>
      <Form.Group controlId="originalPrice"><Form.Label>Original Price</Form.Label><Form.Control type="number" placeholder="Enter original price" value={gameData.originalPrice} onChange={(e) => setGameData({ ...gameData, originalPrice: e.target.value })}/></Form.Group>
      <Form.Group controlId="currentPrice"><Form.Label>Current Price</Form.Label><Form.Control type="number" placeholder="Enter current price" value={gameData.currentPrice} onChange={(e) => setGameData({ ...gameData, currentPrice: e.target.value })}/></Form.Group>
      <Form.Group controlId="state">
        <Form.Label>State</Form.Label>
        <Form.Control as="select" value={gameData.state} onChange={(e) => setGameData({ ...gameData, state: e.target.value })}>
          <option value="Lacrado">Lacrado</option>
          <option value="Aberto, não jogado">Aberto, não jogado</option>
          <option value="Aberto, jogado">Aberto, jogado</option>
          <option value="Usado">Usado</option>
        </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit">Add Game</Button>
    </Form>
  );
};

export default AddGameForm;