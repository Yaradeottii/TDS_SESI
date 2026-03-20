let temDinheiro = true;
let estaChovendo =false;
let carrosEstanaGaragem = false;

let resultaodoAND = "#AND Voce vai ao shopping? ";
resultaodoAND += temDinheiro && estaChovendo;
console.log(resultaodoAND);

let resultaodoOR = "#OR Voce vai ao shopping? ";
resultaodoOR += temDinheiro || carrosEstanaGaragem;
console.log(resultaodoOR);
