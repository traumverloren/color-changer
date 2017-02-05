import { connect } from 'react-redux';
import { changeColor } from './actions';
import ColorButton from './ColorButton';

const mapStateToProps = (state) => {
  return {
    color: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitColor: (color) => {
      dispatch(changeColor(color))
    }
  }
}

const ColorButtonContainer = connect(mapStateToProps, mapDispatchToProps)(ColorButton)

export default ColorButtonContainer
