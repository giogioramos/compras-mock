import React from 'react'
import { connect } from 'react-redux'
import './Barra.scss'
import Actions from '../../store/actions'
import Carrinho from '../../pages/Carrinho/Carrinho'

 function BarraInferior(props) {
    return (
        <div className="barraInferior">
            <button onClick={() => 
                Actions.conteudoModal({
                    conteudo: <Carrinho />,
                    titulo: "Seu Carrinho",
                    grande: true, 
                    btnVoltar: true
                })} className="botao btn-carrinho">
                <span>{props.quantidade_produto}</span>
            </button>
            <button className="botao-verde btn-finalizar">Finalizar Compra</button>
        </div>
    )
}

export default connect(state => ({quantidade_produto: state.carrinho.quantidade_produto}))(BarraInferior)