import React from 'react';
import styled from 'styled-components';

const StyledSleeveDetails = styled.div`
  margin-top: 20px;
`;

const StyledDetailItem = styled.div`
  margin-bottom: 10px;
`;

const SleeveDetails = ({ sleeve }) => {
  if (!sleeve) {
    return <p>No sleeve details available.</p>;
  }

  return (
    <StyledSleeveDetails>
      <h2>Sleeve Details</h2>
      <StyledDetailItem>
        <strong>ID:</strong> {sleeve.id}
      </StyledDetailItem>
      <StyledDetailItem>
        <strong>Brand:</strong> {sleeve.brand}
      </StyledDetailItem>
      <StyledDetailItem>
        <strong>Size:</strong> {sleeve.size}
      </StyledDetailItem>
      {/* Add more details as needed */}
    </StyledSleeveDetails>
  );
};

export default SleeveDetails;