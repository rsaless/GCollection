import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { useGameContext } from '../../utils/GameContext';
import axios from 'axios';

const GamesPage = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/games/all');
        setGames(response.data);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once when the component mounts

//onClick={() => handleGameClick(game._id)}
  return (
  <div>
    <h2>Games List</h2>
    <ul>
      {games && games.map((game) => (
        <li key={game._id} > 
          {game.name}
        </li>
      ))}
    </ul>

    {/* Button to navigate to the Add Game page */}
    <Link to="/games/add">Add New Game</Link>
  </div>
);
};

export default GamesPage;