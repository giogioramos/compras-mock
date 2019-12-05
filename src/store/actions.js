import React from 'react'
import ProdutoDetalhe from '../components/produto/ProdutoDetalhe'
import store from './index'

const Actions = {
    visualizarProduto(produto_atual){
        store.dispatch({
            type: 'COMPRAR_PRODUTO',
            produto_atual,
            conteudo_modal : {
                conteudo: produto_atual.nome !== undefined?<ProdutoDetalhe produto={produto_atual}/>: null,
                titulo: "Adicionar ao carrinho",
                grande: false,
                btnVoltar: false
            }
        })
    },
    addCarrinho(produto){
        store.dispatch({
            type: 'ADD_CARRINHO',
            produto
        })
        this.fecharModal()
    },
    alterarQtdProdutoAtual(val){
        store.dispatch({
            type: 'ALT_QTD_PRODUTO_ATUAL',
            val
        })
    },
    conteudoModal(conteudo_modal){
        store.dispatch({
            type: 'ALT_CONTEUDO_MODAL',
            conteudo_modal
        })
    },
    fecharModal(){
        store.dispatch({
            type: 'FECHAR_MODAL'
        })
    }
}

export default Actions