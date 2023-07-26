import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ producto }) => {
  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} items`);
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3rem',
      }}
    >
      <h2>Detalle de: ""</h2>
      <img src={''} alt={''} style={{ width: '25rem' }} />

      <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
