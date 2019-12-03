import React from 'react'
import '../styles/Home.scss'
import BarraPesquisa from '../components/barra/BarraPesquisa'
import ListaProdutos from '../components/produto/ListaProdutos'
import BotaoCarrinho from '../components/carrinho/BotaoCarrinho'
import ProdutoDetalhe from '../components/produto/ProdutoDetalhe'
import Modal from '../components/modal/Modal'

export default function Home() {
    return (
        <div className="home">
            {/* <Modal titulo="teste" conteudo={<ProdutoDetalhe/>}/> */}
            <BarraPesquisa />   
            <ListaProdutos /> 
            <BotaoCarrinho />
        </div>
    )
}
