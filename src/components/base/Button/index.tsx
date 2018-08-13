import styled from '@src/styles';

type ButtonProps = {
  isActive?: boolean;
};

export const Button = styled<ButtonProps, 'button'>('button')`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  border: 2px solid ${props => props.theme.primaryColor};
  background: ${props =>
    props.isActive ? props.theme.primaryColor : props.theme.primaryColorInverted};
  color: ${props => (props.isActive ? props.theme.primaryColorInverted : props.theme.primaryColor)};
`;

Button.displayName = 'Button';
