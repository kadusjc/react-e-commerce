import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Nav className="flex-column">
      <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
      <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
      <Nav.Link as={Link} to="/customers">Customers</Nav.Link>
      <Nav.Link as={Link} to="/products">Products</Nav.Link>
    </Nav>
  );
};

export default Sidebar;
