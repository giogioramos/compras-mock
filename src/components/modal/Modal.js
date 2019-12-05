import React from 'react'
import './Modal.scss';
import Actions from '../../store/actions';

class Modal extends React.Component {
    render() {
        return (
            <div className="modal">
                <div className="bg" />
                <div style={this.props.grande?{height:"80%"}:{height:"auto"}}className="modal-pai">
                    <div className="cabecalho">
                        <div className="titulo">{this.props.titulo}</div>
                        <button onClick={() => Actions.fecharModal()}>X</button>
                    </div>
                    <div className="conteudo">
                        {this.props.conteudo}
                    </div>
                </div>
                {this.props.btnVoltar ?
                    <button 
                        onClick={() => Actions.fecharModal()} 
                        className="btnVoltar botao-vermelho botao-quadrado"> Voltar
                    </button>
                :null}
            </div>
        )
    }
}

export default Modal
