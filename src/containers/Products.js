import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import ProductItem from './ProductItem';

const Products = () => {
  const products = useSelector((state) => state.products);

  return (
    <div>
      <h2>Products</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
