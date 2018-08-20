import { connect } from 'react-redux';
import StateBoard from './StateBoard';
import { add, sub } from '../../actions/action.js';

const mapStateToProps = state => {
  return {
    value: state.calculator.value
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickAdd: () => {
      dispatch(add());
    },
    onClickSub: () => {
      dispatch(sub());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StateBoard);
