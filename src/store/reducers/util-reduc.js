const ESTADO_INICIAL = {
    conteudo_modal: {
        conteudo: null,
        titulo: null,
        grande: null,
        btnVoltar: null
    },
    busca: "",
    produtos: []
} 

function util(state = ESTADO_INICIAL, action){
    if (action.conteudo_modal !== undefined) {
        return {
            ...state,
            conteudo_modal : {
                conteudo: action.conteudo_modal.conteudo,
                titulo: action.conteudo_modal.titulo,
                grande: action.conteudo_modal.grande,
                btnVoltar: action.conteudo_modal.btnVoltar
            }
        }
    }

    switch (action.type) {
        case "FECHAR_MODAL":
            return {
                ...state,
                conteudo_modal : {
                    conteudo: null
                }
            }
        case "BUSCAR":
            return {
                ...state,
                busca: action.busca
            }
        case "CARREGAR_PRODUTOS":
            return { 
                ...state,
                produtos: state.produtos.concat(action.produtos)
            }
        default:
            return state
    }
}

export default util