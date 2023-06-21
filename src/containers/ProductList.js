import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../components/ProductItem';

const ProductList = () => {
  const products = useSelector((state) => state.products);

  return (
    <div>
      <h1>Lista de Produtos</h1>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
