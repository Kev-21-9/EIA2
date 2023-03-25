let subjekt: string[] = ["Max ", "Moritz ", "Lea ", "Sarah "];
let verb: string[] = ["sieht ", "hilft ", "lobt ", "grüßt "];
let objekt:string[] = ["den Baum", "das Haus", "dem Freund", "die Mutter"];

for (let i: number = 4; i > 0; i--) {
    console.log(getVerse(subjekt, verb, objekt))
}

function getVerse(_subjekt: string[], _verb: string[], _objekt: string[]) {
    let vers: string = ""

    let randomNumberSubjekt: number = Math.floor(Math.random() * _subjekt.length)
    vers = vers + _subjekt.splice(randomNumberSubjekt, 1)

    let randomNumberVerb: number = Math.floor(Math.random() * _verb.length)
    vers = vers + _verb.splice(randomNumberVerb, 1)

    let randomNumberObjekt: number = Math.floor(Math.random() * _objekt.length)
    vers = vers + _objekt.splice(randomNumberObjekt, 1)

    return vers
}

//npm i -g typescript