import styled from '@src/styled-components';
import Text from '@src/components/Typography/Text';

const Heading = styled(Text)`
  ${props => props.theme.Heading};
`;
Heading.displayName = 'Heading';

Heading.defaultProps = {
  as: 'h2',
  m: 0,
  fontSize: 4,
  fontWeight: 700,
};

export default Heading;
