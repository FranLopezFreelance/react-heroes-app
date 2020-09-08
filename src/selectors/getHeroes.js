import { heroes } from '../components/pages/heroes/MockHeroes';

export const getHeroes = (publisher) => {
  const validPublishers = ['DC Comics', 'Marvel Comics'];
  
  if(!validPublishers.includes(publisher)){
    throw new Error('Publish inválido');
  }

  return heroes.filter(hero => hero.publisher === publisher);
}