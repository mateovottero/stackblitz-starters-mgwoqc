import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ listaProductos }) => {
  return (
    <div className="d-flex justify-content-around align-items-center flex-wrap">
      {listaProductos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemList;
