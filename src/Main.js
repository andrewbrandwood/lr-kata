import React from 'react';
import Header from './components/header/header';
import hotels from './data/hotels.js';


class Main extends React.Component {
  componentDidMount = () => {
      this.props.addHotels(hotels);
  }

  render() {
    return (
      <>
        <Header />
      </>
    );
  }
}

export default Main;
