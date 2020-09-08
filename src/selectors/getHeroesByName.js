import { heroes } from '../components/pages/heroes/MockHeroes';

export const getHeroesByName = (name) => {
  name = name.toLocaleLowerCase();
  return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name));
}