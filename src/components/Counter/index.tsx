import React from 'react';
import RedCubeJpg from './RedCube.jpg';
import Button from '@src/components/Button/Button';

type Props = {
  value: number;

  incrementValue: () => void;
  decrementValue: () => void;
};

const Counter: React.SFC<Props> = ({ value, incrementValue, decrementValue }) => (
  <div>
    <p>
      <img src={RedCubeJpg} />
    </p>
    <p id="counter-value">Current value: {value}</p>
    <p>
      <Button id="increment" onClick={incrementValue}>
        Increment
      </Button>
      <Button id="decrement" onClick={decrementValue}>
        Decrement
      </Button>
    </p>
  </div>
);

export default Counter;
