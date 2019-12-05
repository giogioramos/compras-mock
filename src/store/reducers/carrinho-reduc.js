const ESTADO_INICIAL = {
    produto_atual: {},
    carrinho: [],
    quantidade_produto: 0,
    total: 0
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
                    quantidade_produto: state.quantidade_produto + action.produto.quantidade,
                    total: state.total + (action.produto.quantidade * action.produto.valor)
                }
            } else {
                return { 
                    ...state,
                    carrinho: [...state.carrinho, action.produto],
                    produto_atual: {},
                    quantidade_produto: state.quantidade_produto + action.produto.quantidade,
                    total: state.total + (action.produto.quantidade * action.produto.valor)
                }
            }
        case "ALT_QTD_PRODUTO_ATUAL":
            let res_atual = state.produto_atual.quantidade + (action.val)
            if ( (res_atual < 1) || (res_atual > 999) ) {
                res_atual = state.produto_atual.quantidade
            }
            return { 
                ...state, 
                produto_atual: {
                ...state.produto_atual,
                quantidade: res_atual
                }
            }
        case "ALT_QTD_PRODUTO_CARRINHO":
            const index_carrinho = state.carrinho.findIndex(elem => elem.nome === action.produto.nome)

            let nova_quantidade = action.produto.quantidade + (action.val)
            let quantidade_total = state.quantidade_produto + (action.val)
            let total_incremento = action.produto.valor * action.val
            
            if (nova_quantidade < 1) {
                return {
                    ...state,
                    carrinho : [
                        ...state.carrinho.slice(0, index_carrinho), 
                        ...state.carrinho.slice(index_carrinho + 1)
                    ],
                    quantidade_produto: quantidade_total,
                    total: state.total + (total_incremento)
                }
            }

            if (nova_quantidade > 999) {
                nova_quantidade = action.produto.quantidade
                quantidade_total = state.quantidade_produto
                total_incremento = 0
            }

            return {
                ...state,
                carrinho : [
                    ...state.carrinho.slice(0, index_carrinho), 
                    {
                        ...state.carrinho[index_carrinho],
                        quantidade: nova_quantidade,
                    },
                    ...state.carrinho.slice(index_carrinho + 1)
                ],
                quantidade_produto: quantidade_total,
                total: state.total + total_incremento
            }
            
        default: 
            return state
    } 
}

export default carrinho