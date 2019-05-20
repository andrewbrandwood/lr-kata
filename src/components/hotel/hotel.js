import React from 'react';
import { ReactComponent as Star } from '../../images/star.svg';
import './hotel.scss';

class Hotel extends React.Component {
    render(){
      const {name, facilities, starRating} = this.props.overview
      const cssClass = this.props.cssClass;

      return (
        <li className={cssClass + "__item"}>
          <div className={cssClass + "__item-heading"}>
            <h3 className={cssClass + "__item-title"}>{name}</h3>
            <span className="star-rating">{starRating} <Star /></span>
          </div>
          <h4 className={cssClass + "__item-facilities-title"}>Facilities</h4>
          <div className={cssClass + "__item-facilities"}>
            {Object.keys(facilities).map(key => (
              <span key={key} className={cssClass + "__item-facilities-item"}>{facilities[key]}</span>
            ))}
          </div>

        </li>
      )
    }
}

export default Hotel;
