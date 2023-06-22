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
        <React.Fragment key={product.id}>
          <div className="col-md-3"><ProductItem  product={product} /></div>
        </React.Fragment>
      ))}
      </div>
    </div>
  );
};

export default ProductList;
