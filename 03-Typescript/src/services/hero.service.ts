import { heroes } from "../data/hero.js";




export const findHeroById = (id: number) => {
    return heroes.find( (hero) => hero.id === id);
}