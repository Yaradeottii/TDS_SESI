let hora = 12;
let nome = "Yara!";
function Horaatual(hora, nome){

if (hora > 0 && hora <= 11) {
    console.log (`bom dia ${nome}`)
} else if  (hora > 11 && hora <= 18) {
     console.log (`boa tarde ${nome}`)
  }  else if (hora > 18 && hora <= 23) {
        console.log (`boa noite ${nome}`);
  } else  {
   console.log ("hora invalida")
}
}