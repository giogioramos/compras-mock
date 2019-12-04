const ESTADO_INICIAL = {
    conteudo_modal: {
        conteudo: null,
        titulo: null,
        acaoFechar: null
    }
} 

function util(state = ESTADO_INICIAL, action){
    if (action.conteudo_modal !== undefined) {
        return {
            ...state,
            conteudo_modal : {
                conteudo: action.conteudo_modal.conteudo,
                titulo: action.conteudo_modal.titulo,
                acaoFechar: () => {console.log('aa')}
            }
        }
    }
        
    return state 
}

export default util