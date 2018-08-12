import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import Counter from '@src/components/Counter';
import { RootState } from '@src/store';
import { decrement, increment, CounterAction } from './actions';

const mapStateToProps = (state: RootState) => ({
  value: state.counter.value,
});

const mapDispatchToProps = (dispatch: Dispatch<CounterAction>) => ({
  incrementValue: () => dispatch(increment()),
  decrementValue: () => dispatch(decrement()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
