import React from 'react'
import ProdutoDetalhe from '../components/produto/ProdutoDetalhe'
import store from './index'

const Actions = {
    visualizarProduto(produto_atual){
        store.dispatch({
            type: 'COMPRAR_PRODUTO',
            produto_atual,
            conteudo_modal : {
                conteudo: <ProdutoDetalhe produto={produto_atual}/>,
                titulo: "Adicionar ao carrinho"
            }
        })
    },
    addCarrinho(produto){
        store.dispatch({
            type: 'ADD_CARRINHO',
            produto
        })
    },
    alterarQtdProdutoAtual(val){
        return {
            type: 'ALT_QTD_PRODUTO_ATUAL',
            val
        }
    },
    conteudoModal(conteudo){
        return {
            type: 'ALT_CONTEUDO_MODAL',
            conteudo
        }
    }
}

export default Actions