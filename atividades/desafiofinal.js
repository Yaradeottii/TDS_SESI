const estoque = ["Placa mãe" , "Placa de vídeo" ,  "Memoria ram" ,  "Teclado" ,  "RTX 4060"]
estoque.push ("CPU");

let clienteNome = "yara";
let clienteldade = 16;
let possuiCupom = true;

function processarVenda(valorTotal, cupomAtivo, quantidadeItens) {
    let mensagem = valorTotal > 500 || cupomAtivo == true ? valorTotal = valorTotal - (valorTotal * 0.15) : valorTotal;
    return valorTotal;
} 
if (clienteldade >= 16){
    console.log (`venda autorizada para ${clienteNome}\n`)
}

else {
    console.log ("venda bloqueada: idade insuficiente\n")
}

for (let i = 0; i <= 5; i++) {
    console.log (`Despachando item: ${estoque [i]}... OK!`)
}

estoque.shift (0); 

console.log(`\nRelatorio da loja: Cliente ${clienteNome} processou um pedido R$ ${processarVenda(5000, possuiCupom, 2)}. \nItens restantes no estoque: ${estoque.length}`)