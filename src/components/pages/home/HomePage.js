import React, { useState } from 'react'
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../../selectors/getHeroesByName';

export const HomePage = () => {
  
  const [heroesFIltered, setHeroes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleInputChange = (v) => {
    if(v.target.value.trim().length === 0){
      setHeroes([]);
    }else{
      const results = getHeroesByName(v.target.value);
      setHeroes(results);
    }
  }

  return (
    <div>
      <h3>Welcome</h3>
      <hr />

      <div className="row">
        <div className="col-md-12">
          <form className="form-inline" onSubmit={handleSubmit}>
            <input type="text" className="form-control col-md-4" 
              placeholder="Search your Hero..."
              onChange={handleInputChange} />

              <button className="btn btn-outline-secondary ml-4"
                type="submit">
                  Search
              </button>
          </form>
          <hr />
        </div>
        <div className="col-md-12">
          <div className="row mt-4">
            { 
              (heroesFIltered?.length > 0) ?
                heroesFIltered.map((hero) =>
                  <HeroCard key={hero.id} hero={hero} /> 
                ) : ''
            }
          </div>
        </div>
      </div>
    </div>
  )
}
