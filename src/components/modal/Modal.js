import React from 'react'
import './Modal.scss';
import { connect } from 'react-redux';

class Modal extends React.Component {
    render() {
        return (
            <div className="modal">
                <div className="bg" />
                <div className="modal-pai">
                    <div className="cabecalho">
                        <div className="titulo">{this.props.titulo}</div>
                        <button onClick={this.props.acaoFechar}>X</button>
                    </div>
                    <div className="conteudo">
                        {this.props.conteudo}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Modal)
