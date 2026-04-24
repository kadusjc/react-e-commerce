import React from 'react';
import ProductItem from '../components/ProductItem';
import { useSelector } from 'react-redux';

const ProductList = () => {
  const listaProdutos = useSelector((state) => state.products.products);
  
  return (
    <div>
      <div className="row" align="center"><h1 className="page-title">Lista de Produtos</h1></div>
      <div className="product-grid">
      {listaProdutos && listaProdutos.map((product) => (
        <React.Fragment key={product.id}>
          <ProductItem  product={product} />
        </React.Fragment>
      ))}
      </div>
    </div>
  );
};

export default ProductList;
