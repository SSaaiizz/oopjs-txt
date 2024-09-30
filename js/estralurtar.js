import { Jokalari } from '../js/jokalari.js';
class Estralurtar extends Jokalari{
    constructor(izena){
      const izenaa = izena.split('').reverse().join('');
      super(izenaa,Math.random()*85,150)
       
       //this.indarra = Math.random*85;
      // this.osasuna = 150;
    }
   
   }
