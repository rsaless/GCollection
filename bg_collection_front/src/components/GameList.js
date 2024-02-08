import React from 'react';
import styled from 'styled-components';

const StyledGameList = styled.div`
  margin-top: 20px;
`;

const StyledGameItem = styled.li`
  list-style-type: none;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  cursor: pointer;
`;

const GameList = ({ games, onGameSelect }) => {
  return (
    <StyledGameList>
      <h2>Game List</h2>
      <ul>
        {games.map((game) => (
          <StyledGameItem key={game.id} onClick={() => onGameSelect(game)}>
            {game.name}
          </StyledGameItem>
        ))}
      </ul>
    </StyledGameList>
  );
};

export default GameList;