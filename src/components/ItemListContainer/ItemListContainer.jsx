import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../mock/data';
const ItemListContainer = ({ greeting }) => {
  const [listaProductos, setListaProductos] = useState([]);

  //traemos la promesa de nuestro archivo mock y la tratamos
  useEffect(() => {
    getProducts()
      .then((res) => setListaProductos(res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList listaProductos={listaProductos} />
    </div>
  );
};

export default ItemListContainer;
