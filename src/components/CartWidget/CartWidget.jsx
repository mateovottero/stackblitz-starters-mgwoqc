import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { RiShoppingCartLine } from 'react-icons/ri';
const CartWidget = () => {
  return (
    <Button variant="warning">
      <RiShoppingCartLine fontSize="1.3rem" /> <Badge bg="danger">9</Badge>
    </Button>
  );
};

export default CartWidget;
