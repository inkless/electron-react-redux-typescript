import styled from '@src/styles';

export const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  border: 2px solid white;
  background: ${props => props.theme.primaryColorInverted};
  color: ${props => props.theme.primaryColor};
`;
