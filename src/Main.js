import React from 'react';
import Header from './components/header/header';
import SearchResults from './components/search-results/search-results';
import hotels from './data/hotels.js';


class Main extends React.Component {
  componentWillMount = () => {
      this.props.addHotels(hotels);
  }

  render() {
    return (
      <>
        <Header />
        <article className="search-results">
          <section className="search-results-container">
            <h2 className="search-results__title">Search Results</h2>
            <div className="search-results__list" aria-live="polite">
              <SearchResults {...this.props} />
            </div>
          </section>
        </article>
      </>
    );
  }
}

export default Main;
