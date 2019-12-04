import React from 'react'
import '../styles/Home.scss'
import BarraPesquisa from '../components/barra/BarraPesquisa'
import ListaProdutos from '../components/produto/ListaProdutos'
import BotaoCarrinho from '../components/carrinho/BotaoCarrinho'
import ProdutoDetalhe from '../components/produto/ProdutoDetalhe'
import Modal from '../components/modal/Modal'
import funcs from '../store/actions'
import { connect } from 'react-redux'

const Home = ({produto_atual}) => (
    <div className="home">
        {console.log(produto_atual)}
        {produto_atual.nome?<Modal titulo="Adicionar ao carrinho" conteudo={<ProdutoDetalhe />}/>:null}
        <BarraPesquisa />   
        <ListaProdutos /> 
        <BotaoCarrinho />
    </div>
)

export default connect(state => ({produto_atual: state.produto_atual}))(Home)