import React from 'react'
import '../styles/Home.css';
import BarraPesquisa from '../components/barra/BarraPesquisa';
import ListaProdutos from '../components/produto/ListaProdutos';
import BotaoCarrinho from '../components/carrinho/BotaoCarrinho';

export default function Home() {
    return (
        <div className="home">
            <BarraPesquisa />   
            <ListaProdutos /> 
            <BotaoCarrinho />
        </div>
    )
}
