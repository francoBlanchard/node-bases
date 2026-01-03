import { findHeroById } from "./services/hero.service.js";
;
const hero = findHeroById(1);
//codigo js
//console.log(hero?.name ?? 'Hero not found');
console.log(hero?.name);
//# sourceMappingURL=app.js.map