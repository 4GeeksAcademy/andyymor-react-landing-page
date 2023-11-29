import React from 'react';
import { PropTypes } from 'prop-types';
const Cards = ({title, image,text}) => {
  return (
    <div>
      <div className="card" style=  {{width: "18rem"}}>
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{text}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  )
};
Cards.propTypes={
  title: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string
}

export default Cards;