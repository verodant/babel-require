import {a} from "./a";
//import {LitElement} from 'lit-element';
//console.log(LitElement);
const gen = function * (){
    while(true) yield Math.random();
};

async function pp(){
    return Promise.resolve('ja je ji jo ju');
}
async function run(){
    console.log('entro en run')
    const p = await pp();
    console.log(p)
}

run();

const b = gen();

const z = new a('SuperlopeZzzzz');



console.log(`Soy super Zzzzz -> ${z}`, z);

console.log(':: Fin de init.js ::');