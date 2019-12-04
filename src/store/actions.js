const funcs = {
    verProduto(produto_atual, limpar = false){
        return {
            type: 'COMPRAR_PRODUTO',
            produto_atual,
            limpar
        }
    }
}

export default funcs