import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import StateBoard from '../components/StateBoard';
import * as onAction from '../actions/action';

const mapStateToProps = state => {
  return {
    value: state.calculator.value
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(onAction, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StateBoard);
