let gizakiak = [];
let estralurtarrak = [];
let makinak = [];

for (let i=0; i<50;i++){
    let gizakia = new gizaki(i);
    let estralurtarra = new estralurtar(i);
    let maki = new makina(i);
  gizakiak.push(gizakia);
  estralurtarrak.push(estralurtarra);
  makinak.push(maki);
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


