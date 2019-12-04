import React from 'react'

export default function BotaoCarrinho(props) {
    return (
        <div className="botaoCarrinho">
            {props.cont>0?<span>{props.cont}</span>:null}
            <button></button>
        </div>
    )
}
