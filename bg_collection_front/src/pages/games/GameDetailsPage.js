import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGameContext } from '../../utils/GameContext';

const GameDetailsPage = () => {
  const { id } = useParams();
  const { selectedGame } = useGameContext();

  // Fetch details of the selected game or use the selectedGame context state

  return (
    <div>
      <h2>Game Details Page</h2>
      {/* Render details of the selected game */}
      <p>Name: {selectedGame?.name}</p>
      <Link to={`/games/${id}/edit`}>Edit</Link>
    </div>
  );
};

export default GameDetailsPage;