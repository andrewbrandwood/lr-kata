import React from 'react';
import Hotel from '../hotel/hotel';
import './search-results.scss';

class SearchResults extends React.Component {
  render(){

    const hotelsArr = this.props.hotels[0];

    const cssClass = "hotel-list"

    function NoResults(){
      return (<div className="no-results">No results</div>);
    }

    function Results(){
      return (
        <ul className={cssClass}>
          {Object.keys(hotelsArr).map(key => <Hotel cssClass={cssClass} overview={hotelsArr[key]} />)}
        </ul>
      )
    }

    if (typeof hotelsArr === 'undefined' || hotelsArr <= 0) return <NoResults />;
    return <Results />;
  }
}

export default SearchResults;
