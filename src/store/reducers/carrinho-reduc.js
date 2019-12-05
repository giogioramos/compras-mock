const ESTADO_INICIAL = {
    produto_atual: {},
    carrinho: [],
    quantidade_produto: 0
} 

function carrinho(state = ESTADO_INICIAL, action){
    switch (action.type) {
        case "COMPRAR_PRODUTO":
            return {
                ...state, 
                produto_atual : action.produto_atual
            }
        case "ADD_CARRINHO":
            const index = state.carrinho.findIndex(elem => elem.nome === action.produto.nome)
            if (index !== -1){
                return {
                    ...state,
                    carrinho : [
                        ...state.carrinho.slice(0, index), 
                        {
                           ...state.carrinho[index],
                           quantidade: state.carrinho[index].quantidade + action.produto.quantidade,
                        },
                        ...state.carrinho.slice(index + 1)
                    ],
                    quantidade_produto: state.quantidade_produto + action.produto.quantidade
                }
            } else {
                return { 
                    ...state,
                    carrinho: [...state.carrinho, action.produto],
                    produto_atual: {},
                    quantidade_produto: state.quantidade_produto + action.produto.quantidade
                }
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