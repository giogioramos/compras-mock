import React from 'react'
import ItemCarrinho from '../components/carrinho/Carrinho'
import {connect} from 'react-redux'

function Resumo({carrinho}) {
    return (
        <div>
            {carrinho.map((item) => {
                return <ItemCarrinho nome={item.nome}/> 
            })}
        </div>
    )
}

export default connect(state =>({carrinho: state.carrinho.carrinho}))(Resumo)

