import React from 'react'
import { connect } from 'react-redux'
import { withRouter} from 'react-router-dom'
import './Barra.scss'
import Actions from '../../store/actions'
import Carrinho from '../../pages/Carrinho/Carrinho'


function BarraInferior(props) {
    return (
        <footer className="barraInferior">
            {props.carrinho?<button onClick={() => 
                Actions.conteudoModal({
                    conteudo: <Carrinho finalizando={false}/>,
                    titulo: "Seu Carrinho",
                    grande: true, 
                    btnVoltar: true
                })} className="botao btn-carrinho">
                <span>{props.quantidade_produto}</span>
            </button>:null}
            <button onClick={props.acao} className="botao-verde btn-finalizar">{props.titulo}</button>
        </footer>
    )
}

export default connect(state => ({quantidade_produto: state.carrinho.quantidade_produto}))(withRouter(BarraInferior))