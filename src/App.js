import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actionCreators/actionCreators';
import Main from './Main';

const mapStateProps = state => {
  return {
    hotels: state.hotels
  }
}

const mapDispatchProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateProps, mapDispatchProps)(Main);

export default App;
