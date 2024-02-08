import React from 'react';
import styled from 'styled-components';

const StyledGameDetails = styled.div`
  margin-top: 20px;
`;

const StyledDetailItem = styled.div`
  margin-bottom: 10px;
`;

const GameDetails = ({ game }) => {
  if (!game) {
    return <p>No game details available.</p>;
  }

  return (
    <StyledGameDetails>
      <h2>Game Details</h2>
      <StyledDetailItem>
        <strong>ID:</strong> {game.id}
      </StyledDetailItem>
      <StyledDetailItem>
        <strong>Name:</strong> {game.name}
      </StyledDetailItem>
      {/* Add more details as needed */}
    </StyledGameDetails>
  );
};

export default GameDetails;