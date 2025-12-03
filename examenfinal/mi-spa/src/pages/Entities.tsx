import React, { useEffect} from 'react';
import axios from 'axios';
import {useStore } from '../store/store';
import CardList from '../components/CardList';

const Entities: React.FC = () => {
  const { items, setItems,page ,setPage,perPage } = useStore();
  const totalPages = Math.ceil(items.length / perPage) ;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://restcountries.com/');
                setItems(response.data.slice(0,30));
            } catch (error) {
                console.error( error);
            }
        };

        if (items.length === 0) {
          fetchData();
        }
    }, [items.length, setItems]);

    return (
        <>
        <h2>Listado</h2>
         <CardList />
        <div className="d-flex justify-content-between align-items-center mt-3">
        <button className="btn btn-secondary" disabled={page <= 1} onClick={() => setPage(page - 1)}>Prev</button>
        <div>Página {page} / {totalPages}</div>
        <button className="btn btn-secondary" disabled={page >= totalPages} onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </>
  );
};

export default Entities;


