function somaImpares() {
   let soma = 0;

   for (let i = 1; i <= 500; i++) {
        if (i % 2 !== 0 && i % 3 === 0) {
            soma += i;
        }
       console.log("valor de i atualmente: " + i);
       console.log("acumulado de soma: " + soma);
   }
      alert("A soma dos impares e múltiplos de 3 é: " + soma);
}

function menorEMaiorAltura() {
    const quantidadeAlturas = 15;

    let alturas = [1.80, 1.75, 1.50, 1.90, 1.60, 1.70, 2.10, 1.85, 1.95, 1.45, 1.65, 1.55, 2.15, 1.47, 1.52];
    let menor = alturas [0];
    let maior = alturas [0];

    for (let altura of alturas) {
       if (altura < menor) {
        menor = altura   
        }

        if (altura > maior) {
            maior = altura
        }
    
    }
    alert(`
        A quantidade de alturas percorrridas é: ${quantidadeAlturas}
        A maior altura é: ${maior} &
        A menor altura é: ${menor} !
        `)
     
}

function mediaAritmetica() {
  let soma = 0;
  let positivos = 0;
  let negativos = 0;
  let quantidadeValores = 0;
  let valor = 10;

  while (valor >= -8) {
       soma += valor;
       quantidadeValores++

      console.log("soma:" + soma);
      console.log("quantidade:" + quantidadeValores);

       if (valor > 0) {
        positivos++
        console.log("positivo:" + positivos);
       } else {
        negativos++
        console.log("negativo:" + negativos);
       }
       
       valor -= 1;

  }




}