"use strict";
let subjekt = ["Max ", "Moritz ", "Lea ", "Sarah "];
let verb = ["sieht ", "hilft ", "lobt ", "grüßt "];
let objekt = ["den Baum", "das Haus", "dem Freund", "die Mutter"];
for (let i = 4; i > 0; i--) {
    console.log(getVerse(subjekt, verb, objekt));
}
function getVerse(_subjekt, _verb, _objekt) {
    let vers = "";
    let randomNumberSubjekt = Math.floor(Math.random() * _subjekt.length);
    vers = vers + _subjekt.splice(randomNumberSubjekt, 1);
    let randomNumberVerb = Math.floor(Math.random() * _verb.length);
    vers = vers + _verb.splice(randomNumberVerb, 1);
    let randomNumberObjekt = Math.floor(Math.random() * _objekt.length);
    vers = vers + _objekt.splice(randomNumberObjekt, 1);
    return vers;
}
//npm i -g typescript
//# sourceMappingURL=A01_RandomPoemTS.js.map