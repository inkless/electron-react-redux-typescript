import * as React from 'react';

import './style.scss';
import * as RedCubeJpg from './RedCube.jpg';

type Props = {
  value: number;

  incrementValue: () => void;
  decrementValue: () => void;
};

const Counter: React.SFC<Props> = ({ value, incrementValue, decrementValue }) => (
  <div className="counter">
    <p>
      <img src={RedCubeJpg} />
    </p>
    <p id="counter-value">Current value: {value}</p>
    <p>
      <button id="increment" onClick={incrementValue}>
        Increment
      </button>
      <button id="decrement" onClick={decrementValue}>
        Decrement
      </button>
    </p>
  </div>
);

export default Counter;
