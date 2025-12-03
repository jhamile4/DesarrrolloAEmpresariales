import React from 'react';
import type { Item } from '../store/store';

const Card: React.FC<{ item: Item }> = ({ item }) => {
  return (
    <div className="card h-100">
      <img src={`https://restcountries.com/`} className="card-img-top" alt={item.title}/>
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.body}</p>
      </div>
    </div>
  );
};
export default Card;