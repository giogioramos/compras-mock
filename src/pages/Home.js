import React from 'react'
import { connect } from 'react-redux'

import '../styles/Home.scss'
import BarraPesquisa from '../components/barra/BarraPesquisa'
import ListaProdutos from '../components/produto/ListaProdutos'
import ProdutoDetalhe from '../components/produto/ProdutoDetalhe'
import BotaoCarrinho from '../components/carrinho/BotaoCarrinho'
import Modal from '../components/modal/Modal'
import Actions from '../store/actions'

class Home extends React.Component{
    render(){
        return (
            <div className="home">
                {this.props.conteudo_modal.conteudo !== null?
                <Modal 
                    // acaoFechar={() => {this.props.dispatch(actions.visualizarProduto({}))}} 
                    acaoFechar={this.props.conteudo_modal.acaoFechar} 
                    titulo={this.props.conteudo_modal.titulo}
                    conteudo={this.props.conteudo_modal.conteudo}
                    // conteudo={<ProdutoDetalhe produto={this.props.produto_atual}/>}
                />:null}
                <BarraPesquisa />   
                <ListaProdutos /> 
                <BotaoCarrinho cont={this.props.carrinho.length}/>
            </div>
        )
    }
}

export default connect(
    state => ({
        produto_atual: state.carrinho.produto_atual, carrinho: state.carrinho.carrinho,
        conteudo_modal: state.util.conteudo_modal
    })
)(Home)