import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getHero } from '../../../selectors/getHero';

export const HeroPage = ({history}) => {

  const {heroId} = useParams();
  
  /* const hero = getHero(heroId); */
  const hero = useMemo(() => getHero(heroId), [heroId]);

  if(!hero){
    return <Redirect to="/" />
  }

  const handleReturn = () => {
    if(history.length <= 2){
      history.push('/');
    }else{
      history.goBack();
    }
  }

  return (
    <div className="row mt-5 animate__animated animate__fadeIn">
      <div className="col-md-3">
        <img src={`../assets/images/${heroId}.jpg`} 
          className="img-thumbnail"
          alt={hero.superhero} />
      </div>
      <div className="col-md-9">
        <h3>{hero.superhero}</h3>
        <p><b>Alter Ego:</b> {hero.alter_ego}</p>
        <p><b>Characters:</b> {hero.characters}</p>
        <p><b>First Appearance:</b> {hero.first_appearance}</p>
        <p><b>Publisher:</b> {hero.publisher}</p>
        <button 
          onClick={handleReturn}
          className="btn btn-outline-secondary">
          Return
        </button>
      </div>
    </div>
  )
}
