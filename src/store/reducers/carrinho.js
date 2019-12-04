const ESTADO_INICIAL = {
    produto_atual: {},
    carrinho: []
} 

function carrinho(state = ESTADO_INICIAL, action){
    switch (action.type) {
        case "COMPRAR_PRODUTO":
            return {
                ...state, 
                produto_atual : action.produto_atual
            }
        case "ADD_CARRINHO":
            return { 
                ...state,
                carrinho: [...state.carrinho, action.produto],
                produto_atual: {}
            }
        case "ALT_QTD_PRODUTO_ATUAL":
            let res = state.produto_atual.quantidade + (action.val)
            if ( (res < 1) || (res > 999) ) {
                res = state.produto_atual.quantidade
            }
            return { 
                ...state, 
                produto_atual: {
                ...state.produto_atual,
                quantidade: res
                }
            }
        default: 
            return state
    } 
}

export default carrinho