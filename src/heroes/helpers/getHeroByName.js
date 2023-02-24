import { heroes } from '../data/heroes';
export const getHeroByName = (name) => {

    let superHeroName = name.trim().toLowerCase();

    if( superHeroName.length <= 1 ) return [];

    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes( superHeroName ) 
    );

};