import React from 'react'
import { connect } from 'react-redux'

import './Home.scss'
import BarraPesquisa from '../../components/barra/BarraPesquisa'
import ListaProdutos from '../../components/produto/ListaProdutos'
import BarraInferior from '../../components/barra/BarraInferior'
import Modal from '../../components/modal/Modal'

class Home extends React.Component{
    render(){
        return (
            <div className="home">
                {this.props.conteudo_modal.conteudo !== null?
                <Modal 
                    titulo={this.props.conteudo_modal.titulo}
                    conteudo={this.props.conteudo_modal.conteudo}
                    grande={this.props.conteudo_modal.grande}
                    btnVoltar={this.props.conteudo_modal.btnVoltar}
                />:null}
                <BarraPesquisa />   
                <ListaProdutos reduzir={this.props.quantidade_produto > 0}/> 
                {this.props.quantidade_produto > 0 ?
                <BarraInferior />:null}
            </div>
        )
    }
}

export default connect(
    state => ({
        produto_atual: state.carrinho.produto_atual, carrinho: state.carrinho.carrinho,
        conteudo_modal: state.util.conteudo_modal,
        quantidade_produto: state.carrinho.quantidade_produto
    })
)(Home)