import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease-in, color 0.3s ease-in;
`;

const Card = ({ title, content }) => {
  return (
    <StyledCard>
      <h3>{title}</h3>
      <p>{content}</p>
    </StyledCard>
  );
};

export default Card;
