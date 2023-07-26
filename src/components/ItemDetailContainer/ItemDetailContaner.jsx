import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
const ItemDetailContainer = ({ id }) => {
  const [producto, setProducto] = useState({});
  console.log('el item es:', id);
  //traemos la promesa de nuestro archivo mock y la tratamos
  useEffect(() => {
    //Aca tengo que traer un solo objeto
  }, []);

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;
