//Arrays
//Exercício 1
// Altere o valor da variável menuServices para que ela passe a ter o valor “Serviços”. Isso deve ser feito através da variável menu.

// Exercício 2
// Adicione o valor “Contato” no final do array menu.

const menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
const menuServices = menu[1];

console.log(menuServices);

menu.push('Contato');

console.log(menu);

// Estrutura de repetição for
// Para fixar
// Chegou o momento de testar os conhecimentos apresentados no conteúdo do dia. Vamos nessa?

// Exercício 1
// Utilize o for para imprimir os elementos da lista groceryList através de console.log():

const groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia', 'Macarrão'];

for(let index = 0; index < groceryList.length; index += 1) {
    // const currentItem = groceryList[index];
    // console.log(currentItem);
    console.log(`${index} - ${groceryList[index]}`);
}
  
// Exercícios - agora, a prática
// 🚀 Array e loop for

// 1.  Percorra o array imprimindo todos os valores contidos nele com a função console.log().
// 2.  Some todos os valores contidos no array e imprima o index.
// 3.  Calcule e imprima a média aritmética dos valores contidos no array. 
//     A média aritmética é o index da soma de todos os elementos dividido pelo número total de elementos.
// 4.  Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: 
//     caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; 
//     e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.
// 5.  Utilizando for, descubra o maior valor contido no array e imprima-o.
// 6.  Descubra quantos valores ímpares existem no array e imprima o index. 
//     Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.


 const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//  Item 1

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index = 0; index < numbers.length; index +=1) {
    console.log(numbers[index]);
}


// Item 2

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for(let index = 0; index < numbers.length; index +=1) {
    // soma = soma + numbers[index];
    soma += numbers[index];
}

console.log(soma);

// Item 3

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for(let index = 0; index < numbers.length; index +=1) {
    soma += numbers[index];
}

let mediaAritmetica = soma / numbers.length;

console.log(mediaAritmetica);

// Item 4

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for(let index = 0; index < numbers.length; index +=1) {
    soma += numbers[index];
}

let mediaAritmetica = soma / numbers.length;

if (mediaAritmetica > 20){
    menssage = 'O valor da média aritmética é maior que 20';
} else {
    menssage = 'O valor da média aritmética é menor ou igual a 20';
}

console.log(menssage);

// Item 5 ❌Rever questão❌

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumero = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maiorNumero) {
    maiorNumero = numbers[index];
  }
};

console.log(maiorNumero);

// Item 6 
// ❌❌❌ Mensagem pra mim: Rafaella esude essa questão, 
// pois vc não entendeu direito!❌❌❌

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  } 
};

if (result === 0){
    console.log('Nenhum valor ímpar encontrado.');
  } else {
    console.log(result);
  };

// // DESAFIOS
// Desafio fatorial
// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. 
// Por exemplo:
// O fatorial é representado pelo sinal !
// Exemplo de 4 fatorial:
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
};

console.log(fatorial);

// Desafio de inverter palavra
// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. 
// Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.

// De olho na dica 👀: Pesquise sobre os seguintes métodos: split(), reverse() e join();

let word = 'trybe';
let invertePalavra = '';

invertePalavra = word.split('').reverse().join('');

console.log(invertePalavra);

// Desafio dos asteriscos
// Escreva um algoritmo que, dado um valor n, sendo n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n. Por exemplo:

// n = 5

// *****
// *****
// *****
// *****
// *****

let n = 5;
let asterisco = '*';
let resultado = '';

for (let index = 0; index < n; index += 1) {
  resultado = resultado + asterisco;
};

for (let index = 0; index < n; index += 1) {
  console.log(resultado);
};

//Desafio da pirâmide de asteriscos
// Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// n = 5

// *
// **
// ***
// ****
// *****

let n = 5;
let asterisco = '*';
let resultado = '';

for (let index = 0; index <= n; index += 1) {
    resultado = resultado + asterisco;
    console.log (resultado);
  };

//   Desafio dos asteriscos, parte 2
// Agora, inverta o lado do triângulo. Por exemplo:
// ❌❌❌ Resposta copiada do Gabarito:
// Preciso entender essa questão ❌❌❌

let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n - 1;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};

// FIM