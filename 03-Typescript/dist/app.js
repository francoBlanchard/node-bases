"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const heroes = [
    {
        id: 1,
        name: 'Ironman',
        owner: 'Marvel',
    },
    {
        id: 2,
        name: 'spiderman',
        owner: 'Marvel',
    },
    {
        id: 3,
        name: 'Batman',
        owner: 'DC',
    }
];
const finHeroById = (id) => {
    return heroes.find((hero) => hero.id === id);
};
const hero = finHeroById(1);
//codigo js
//console.log(hero?.name ?? 'Hero not found');
console.log(hero?.name);
//# sourceMappingURL=app.js.map