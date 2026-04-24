# React E-Commerce

Aplicação de e-commerce desenvolvida com React.js — projeto final do livro **"React.js - Aprenda praticando"**, disponível na [Amazon](https://www.amazon.com.br/dp/B0CPDNP4KP).

## Sobre o Projeto

Este é um e-commerce completo construído com React, que aborda na prática os principais conceitos do ecossistema React ensinados ao longo do livro, incluindo:

- **React Router DOM** — navegação entre páginas (Home, Login, Listagem de Produtos, Detalhes do Produto, Carrinho, Perfil do Usuário e página 404)
- **Redux + Redux Toolkit** — gerenciamento de estado global (carrinho de compras, dados do usuário e produtos)
- **React Bootstrap** — estilização e componentes de UI
- **Axios** — consumo de API externa de cotação de moedas (USD/BRL, EUR/BRL)
- **Testes unitários** — testes com React Testing Library para componentes e containers

## Estrutura do Projeto

```
src/
├── components/       # Componentes reutilizáveis (Navbar, ProductItem, CartItem, AddToCartButton)
├── containers/       # Páginas da aplicação (Home, Login, Cart, ProductList, ProductDetails, UserProfile, NotFound)
├── redux/
│   ├── actions/      # Actions do Redux (cart, product, user)
│   ├── reducers/     # Reducers do Redux (cart, product, user)
│   └── store.js      # Configuração da store com Redux Toolkit
├── service/          # Configuração do Axios para APIs externas
└── styles/           # Arquivos CSS dos componentes
```

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/react-e-commerce.git
```

2. Acesse a pasta do projeto:

```bash
cd react-e-commerce
```

3. Instale as dependências:

```bash
npm install
```

## Como Rodar

### Modo desenvolvimento

```bash
npm start
```

A aplicação será aberta automaticamente em [http://localhost:3000](http://localhost:3000).

### Rodar os testes

```bash
npm test
```

### Gerar build de produção

```bash
npm run build
```
