import React from 'react';
import Card from './Card';
import { useStore } from '../store/store';

const CardList: React.FC = () => {
  const { items, page, perPage } = useStore();
  const start = (page - 1) * perPage;
  const paged = items.slice(start, start + perPage);

  return (
    <div className="row g-3">
      {paged.map((it) => (
        <div className="col-md-4" key={it.id}>
          <Card item={it} />
        </div>
      ))}
    </div>
  );
};
export default CardList;