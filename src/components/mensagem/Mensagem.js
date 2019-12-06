import React from 'react'
import './Mensagem.scss'

export default function Mensagem(props) {
    return (
        <div className="mensagem">
            {props.conteudo}
        </div>
    )
}
