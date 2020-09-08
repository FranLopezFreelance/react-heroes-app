import { heroes } from '../components/pages/heroes/MockHeroes';

export const getHero = (id) => {
  return heroes.find(hero => hero.id === id);
}