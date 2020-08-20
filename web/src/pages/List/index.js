import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import ListItem from '../../components/ListItem';
import api from '../../services/api'

import { Container } from './styles';

function List() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    api.get('/products').then(res => setProducts(res.data))
  }, [products])
  

  return (
    <Container>

     <header>
        <h1>Minha Lista de Compras</h1>
        <Link className="back" to='/'>+ Adicionar novos Items</Link>
     </header>
      <ul>
        {products.map(product => (
          <ListItem 
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            value={product.value}
            quantity={product.quantity}
          /> 
        ))}
      </ul>

    </Container>
  );
}

export default List;