import React from 'react'
import './Modal.scss';
import Actions from '../../store/actions';

class Modal extends React.Component {
    render() {
        return (
            <div className="modal">
                <div className="bg" />
                    <center>
                    <div style={this.props.grande?{height:"80vh"}:{height:"auto"}}className="modal-pai">
                        <header className="cabecalho">
                            <div className="titulo">{this.props.titulo}</div>
                            <button onClick={() => Actions.fecharModal()}>X</button>
                        </header>
                        <section className="conteudo">
                            {this.props.conteudo}
                        </section>
                    </div>
                    {this.props.btnVoltar ?
                        <button 
                            onClick={() => Actions.fecharModal()} 
                            className="btnVoltar botao-vermelho botao-quadrado"> Voltar
                        </button>
                    :null}
                </center>
            </div>
        )
    }
}

export default Modal
