import {createStore} from 'redux'

const ESTADO_INICIAL = {
    produto_atual: {},
    carrinho: []
}

function reducer(state = ESTADO_INICIAL, action){
    if (action.type === "COMPRAR_PRODUTO") {
        return {
            ... state, 
            produto_atual : (action.limpar?{}:action.produto_atual)
        }
    }

    return state
}

const store = createStore(reducer)

export default store