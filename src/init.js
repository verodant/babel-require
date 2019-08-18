
import { a } from "./a";
//import {LitElement} from 'lit-element';
//console.log(LitElement);

import { LocalStorage } from 'ttl-localstorage';


LocalStorage.put('myKey', 'soy pepe').then(() => {
  LocalStorage.get('myKey').then(d=>{console.log('Quien soy? ->',d)})
});

// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class MyElement extends LitElement {

  /**
   * Implement `render` to define a template for your element.
   *
   * You must provide an implementation of `render` for any element
   * that uses LitElement as a base class.
   */
  render(){
    /**
     * `render` must return a lit-html `TemplateResult`.
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function:
     */
    return html`
      <!-- template content -->
      <p>A paragraph</p>
    `;
  }
}
// Register the new element with the browser.
customElements.define('my-element', MyElement);


const gen = function* () {
    while (true) yield Math.random();
}

async function pp() {
    return Promise.resolve('ja je ji jo ju');
}

async function run() {
    console.log('entro en run')
    const p = await pp();
    console.log(p)
}

run();

const b = gen();

const z = new a('SuperlopeZzzzz');



console.log(`Soy super Zzzzz -> ${z}`, z);

console.log(':: Fin de init.js ::');