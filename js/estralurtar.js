import { Jokalari } from '../js/jokalari.js';
export class Estralurtar extends Jokalari{
    constructor(izena){
      const izenaa = izena.split('').reverse().join('');
      super(izenaa,150,Math.random()*85)
       
       //this.indarra = Math.random*85;
      // this.osasuna = 150;
    }
   
   }
