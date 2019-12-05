const ESTADO_INICIAL = {
    conteudo_modal: {
        conteudo: null,
        titulo: null,
        grande: null,
        btnVoltar: null
    }
} 

function util(state = ESTADO_INICIAL, action){
    if (action.type === "FECHAR_MODAL") {
        return {
            ...state,
            conteudo_modal : {
                conteudo: null
            }
        }
    }
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
        
    return state 
}

export default util