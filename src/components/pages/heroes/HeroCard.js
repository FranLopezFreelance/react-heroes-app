import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({hero}) => {
  return (
    <div className="col-md-2 mb-4 text-center animate__animated animate__fadeIn">
      <div className="card">
        <img className="card-img-top" src={`/assets/images/${hero.id}.jpg`} alt={hero.superhero} />
        <div className="card-body">
          <Link 
            to={`./hero/${hero.id}`}
            className="link">{hero.superhero}</Link>
        </div>
      </div>
    </div>
  )
}
