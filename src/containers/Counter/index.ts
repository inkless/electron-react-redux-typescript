import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import Counter from 'components/Counter';
import { RootState } from 'store/reducers';
import { CounterAction, decrement, increment } from './actions';

const mapStateToProps = (state: RootState) => ({
  value: state.counter.value
});

const mapDispatchToProps = (dispatch: Dispatch<CounterAction>) => ({
  incrementValue: () => dispatch(increment()),
  decrementValue: () => dispatch(decrement())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
