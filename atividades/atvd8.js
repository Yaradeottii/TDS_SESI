function converterMoeda(valorReal, taxaCambio) {
    return valorReal * taxaCambio;
  }
  
  // Gerando valores aleatórios para o exemplo
  let valorEmReal = Math.floor(Math.random() * 1000) + 1; // valor entre 1 e 1000 reais
  let taxaDeCambio = (Math.random() * (6 - 4) + 4).toFixed(2); // taxa entre 4.00 e 6.00
  
  // Exemplo de uso com valores aleatórios
  let valorConvertido = converterMoeda(valorEmReal, taxaDeCambio);
  console.log(`Valor em Real: R$${valorEmReal}`);
  console.log(`Taxa de Câmbio: ${taxaDeCambio}`);
  console.log(`Valor convertido: ${valorConvertido.toFixed(2)}`);