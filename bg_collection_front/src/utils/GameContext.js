import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [games, setGames] = useState([]);
  
    const addGame = (newGame) => {
      // Logic to add a new game to the context
      setGames((prevGames) => [...prevGames, newGame]);
    };
  
    const editGame = (gameId, updatedGameData) => {
      // Logic to edit an existing game in the context
      setGames((prevGames) =>
        prevGames.map((game) =>
          game._id === gameId ? { ...game, ...updatedGameData } : game
        )
      );
    };

  const contextValue = {
    games,
    addGame,
    editGame,
    // ... other context functions
  };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};

export const useGameContext = () => {
  return useContext(GameContext);
};