import React from 'react';

import api from '../../services/api'

import { Container } from './styles';

function ListItem({id,  name, description, value, quantity}) {
    async function handleDeleteItem(id){
        try {
           await api.delete(`products/${id}`)
        } catch (err) {
            alert('Erro ao deletar caso, tente novamente')
        }  
      }

    return (
      <Container>
          <div className="infos-block">
              <strong>Produto: </strong>
              <p>{name}</p>
          </div>

          <div className="infos-block">
              <strong>Descrição: </strong>
              <p>{description ? description : 'Sem descrição'}</p>
          </div>

          <div className="infos-block">
              <strong>Valor: </strong>
              <p>{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(value)}</p>
          </div>

          <div className="infos-block">
              <strong>Quantidade: </strong>
              <p>{quantity}</p>
          </div>

          <div className="infos-block">
              <strong>Valor Total: </strong>
              <p>{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(value * quantity)}</p>
          </div>

          <button type='button' className='button' onClick={() => handleDeleteItem(id)}>
            Já Comprei
          </button>
      </Container>
  );
}

export default ListItem;