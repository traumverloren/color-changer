import { connect } from 'react-redux';
import Main from './Main'

const mapStateToProps = (state) => {
  return {
    color: state
  };
};

const MainContainer = connect(mapStateToProps, null)(Main)

export default MainContainer
