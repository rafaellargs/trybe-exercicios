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
  
