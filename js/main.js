import { jokalari } from '../js/jokalari.js';
import { gizaki } from '../js/gizaki.js';
import { makina } from '../js/makina.js';
import { estralurtar } from '../js/estralurtar.js';

let gizakiak = [];
let estralurtarrak = [];
let makinak = [];

for (let i=0; i<50;i++){
    gizakiak.push(new gizaki(`g${i}`));
    estralurtarrak.push(new estralurtar(`e${i}`));
    makinak.push(new makina(`m${i}`));

}

let Lista = [...gizakiak, ...estralurtarrak, ...makinak];

function desordenatu(array){     //fisher-yates algoritmoa erabiliz
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));  
        [array[i], array[j]] = [array[j], array[i]];  
    }
    return array;

}

let zelaia = desordenatu(Lista);

for(let i = 0; i < zelaia.length-1; i+=2){
    zelaia[i].borrokatu(zelaia[i+1])
}
