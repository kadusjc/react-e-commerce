import { FETCH_PRODUCTS } from '../actions/types';

const initialState = {
  products: [
    { id: '1', price: 89.9 , name: 'Space Cowboys', description: 'Camisa com estampa da astronauta. Diversos tamanhos e cores', url: 'https://www.colab55.com/@kadu00shirts/tees/cowboys-do-espaco', image: 'https://cdn.colab55.com/images/55004/studio/200639/art/431848/tees.png'},
    { id: '2', price: 89.9 , name: 'Zombie Apocalipse', description: 'Camisa com estampa de uma cidade destruída por um apocalipse zumbi. Diversos tamanhos e cores', url: 'https://www.colab55.com/@kadu00shirts/tees/zombie-apocalypse', image: 'https://cdn.colab55.com/images/55005/studio/200639/art/440848/tees.png'},
    { id: '3', price: 89.9 , name: 'Praia', description: 'Camisa com estampa de "Don\'t Worry, Go to the. Diversos tamanhos e cores', url: 'https://www.colab55.com/@kadu00shirts/tees/praia', image: 'https://cdn.colab55.com/images/55005/studio/200639/art/432324/tees.png'},
    { id: '4', price: 89.9 , name: 'Ubuntu', description: 'Camisa com Logo do Sistema Linux Ubuntu. Diversos tamanhos e cores', url: 'https://www.colab55.com/@kadu00shirts/tees/ubuntu', image: 'https://cdn.colab55.com/images/55002/studio/200639/art/428387/tees.png'},
   
    { id: '5', price: 89.9 , name: 'Atari Gamer Since 1979', description: 'Camisa com joystick e data de lançamento do Atari 2600. Diversos tamanhos e cores', url: 'https://www.colab55.com/@kadu00shirts/tees/gamer-since', image: 'https://cdn.colab55.com/images/55003/studio/200639/art/424565/tees.png'},
    { id: '6', price: 89.9 , name: 'Jumbo Eletro', description: 'Camisa com logo da antiga loja do Jumbo Eletro que mostra o quão velho você está. Diversos tamanhos e cores', url: 'https://www.colab55.com/@kadu00shirts/tees/jumbo-eletro', image: 'https://cdn.colab55.com/images/55003/studio/200639/art/426475/tees.png'},
    { id: '7', price: 89.9 , name: 'Cidade Perdida de Atlantis', description: 'Camisa com uma arte da antiga cidade perdida de Atlantida embaixo do oceano. Diversos tamanhos e cores', url: 'https://www.colab55.com/@kadu00shirts/tees/the-lost-city-of-atlantis', image: 'https://cdn.colab55.com/images/55005/studio/200639/art/431895/tees.png'},
    { id: '8', price: 89.9 , name: 'Dragon Ball - Majin Vegeta', description: 'Camisa com o rosto do Vegeta Super Sayajin transformado em Majin Vegeta. Diversos tamanhos e cores', url: 'https://www.colab55.com/@kadu00shirts/tees/majin-vegeta', image: 'https://cdn.colab55.com/images/55004/studio/200639/art/433961/tees.png'},
   
    { id: '9', price: 89.9 , name: 'Camisa Medusa', description: 'Camisa com o rosto de uma medusa linda com a frase "I min Love with Medusa". Diversos tamanhos e cores', url: 'https://www.colab55.com/@kadu00shirts/tees/in-love-with-medusa', image: 'https://cdn.colab55.com/images/55004/studio/200639/art/431905/tees.png'},
    { id: '10', price: 89.9 , name: 'Camisa Índio', description: 'Camisa com arte de um grupo de índios juntos à fogueira. Diversos tamanhos e cores', url: 'https://www.colab55.com/@kadu00shirts/tees/indian', image: 'https://cdn.colab55.com/images/55002/studio/200639/art/431969/tees.png'},
    { id: '11', price: 89.9 , name: 'Empoderamento Feminino', description: 'Camisa com a silhueta de uma mulher com a frase "Girl Power" com corações e borboletas. Diversos tamanhos e cores', url: 'https://www.colab55.com/@kadu00shirts/tees/girl-power', image: 'https://cdn.colab55.com/images/55003/studio/200639/art/427506/tees.png'},
    { id: '12', price: 89.9 , name: 'Gameboy Gamer Since 1989', description: 'Camisa com um Nintendo Gameboy e sua data de lançamento. Diversos tamanhos e cores', url: 'https://www.colab55.com/@kadu00shirts/tees/gamer-since-1989-gameboy', image: 'https://cdn.colab55.com/images/55005/studio/200639/art/424800/tees.png'},

  ] 
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
   
    default:
      return state;
  }
};

export default productReducer;
