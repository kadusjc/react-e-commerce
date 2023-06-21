import React from 'react';
import ProductItem from '../components/ProductItem';
import { useSelector } from 'react-redux';

const ProductList = () => {
  const listaProdutos = useSelector((state) => state.products.products);
  
  return (
    <div>
      <div className="row" align="center"><h1>Lista de Produtos</h1></div>
      <div className="row">
      {listaProdutos && listaProdutos.map((product) => (
        <div className="col-md-3"><ProductItem key={product.id} product={product} /></div>
      ))}
      </div>
    </div>
  );
};

export default ProductList;
