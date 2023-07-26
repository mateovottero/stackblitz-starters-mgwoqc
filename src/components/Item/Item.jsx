import React from 'react';
import { Link } from 'react-router-dom';
const Item = ({ producto }) => {
  const { id, img, name, description, price, stock, hashtags } = producto;

  return (
    <div
      className="card"
      style={{ width: '20rem', margin: '.5rem', alignSelf: 'center' }}
    >
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <p className="card-text">{name}</p>
        <p className="card-text">{description}</p>
        <p className="card-text">${price}</p>
        <p className="card-text">stock: {stock}</p>
      </div>

      <Link to={`/item/${id}`} className="btn btn-primary">
        Ver más
      </Link>
    </div>
  );
};

export default Item;
