import { jokalari } from '../js/jokalari.js';
class estralurtar extends jokalari{
    constructor(izena){
      const izenaa = izena.split('').reverse().join('');
      super(izenaa,Math.random()*85,150)
       
       //this.indarra = Math.random*85;
      // this.osasuna = 150;
    }
   
   }
