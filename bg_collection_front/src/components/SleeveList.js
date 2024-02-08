import React from 'react';
import styled from 'styled-components';

const StyledSleeveList = styled.div`
  margin-top: 20px;
`;

const StyledSleeveItem = styled.li`
  list-style-type: none;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  cursor: pointer;
`;

const SleeveList = ({ sleeves, onSleeveSelect }) => {
  return (
    <StyledSleeveList>
      <h2>Sleeve List</h2>
      <ul>
        {sleeves.map((sleeve) => (
          <StyledSleeveItem key={sleeve.id} onClick={() => onSleeveSelect(sleeve)}>
            {`${sleeve.brand} - ${sleeve.size}`}
          </StyledSleeveItem>
        ))}
      </ul>
    </StyledSleeveList>
  );
};

export default SleeveList;