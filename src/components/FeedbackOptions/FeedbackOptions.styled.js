import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  list-style: none;

  padding: 0;
`;

export const Button = styled.button`
  margin-right: 10px;
  padding: 3px;
  min-width: 60px;
  border-radius: 5px;
  border: 1px solid gray;
  cursor: pointer;
  transition: transform 250ms linear;
  background-color: #535c603d;
  :hover {
    transform: scale(110%);
  }
`;