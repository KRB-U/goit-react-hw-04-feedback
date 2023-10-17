import styled from 'styled-components';

const DivButtonContainer = styled.div`
  display: flex;
  justify-content: left;
  gap: 10px;
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #a0a0a0;
    color: white;
  }

  &:active {
    background-color: #c8c8c8;
  }
`;

export { DivButtonContainer, Button };
