import React from 'react'
import '../styles/Home.css';
import BarraPesquisa from '../components/BarraPesquisa';
import ListaProdutos from '../components/ListaProdutos';
import BotaoCarrinho from '../components/BotaoCarrinho';

export default function Home() {
    return (
        <div className="home">
            <BarraPesquisa />   
            <ListaProdutos /> 
            <BotaoCarrinho />
        </div>
    )
}
