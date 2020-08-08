import React, { useState } from 'react';
import './estilo.css';

export default function PaginaInicial() {
  const [ numeroAleatorio, setNumeroAleatorio ] = useState(
    gerarNumero()
  );

  function handleClick() {
    setNumeroAleatorio(gerarNumero());
  }

  function gerarNumero(){
    return Math.floor(Math.random() * (100-1) + 1);
  }

  return(
    <div className="conteudo-centralizado">
      <h3>Número aleatório:</h3>
      <h1>{ numeroAleatorio }</h1>

      <div className='area-botao'>
        <label>
          Click no botão abaixo para gerar um número aleatório:
        </label>

        <button onClick={ handleClick }>
          Gerar número
        </button>
      </div>
    </div>
  );
}
