import React, { useMemo } from 'react';
import { getHeroes } from '../../../selectors/getHeroes';
import { HeroCard } from './HeroCard';

export const HeroesList = ({publisher}) => {

  /* const heroes = getHeroes(publisher); */
  const heroes = useMemo(() => getHeroes(publisher), [publisher]);
  
  return (
      <div className="row animate__animated animate__fadeIn">
        { heroes.map(hero => 
          <HeroCard key={hero.id} hero={hero} />
        )}
      </div>
  )
}
