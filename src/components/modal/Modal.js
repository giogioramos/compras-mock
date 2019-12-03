import React from 'react'
import './Modal.scss';

export default class Modal extends React.Component {
    render(){
        return (
            <div className="modal">
                <div className="modal-bg" />
                <div className="modal-pai">
                    <div className="modal-cabecalho">
                        <div className="titulo">{this.props.titulo}</div>
                        <button>X</button>
                    </div>
                    <div className="modal-conteudo">
                        {this.props.conteudo}
                    </div>
                </div>
            </div>
        )
    }
}
