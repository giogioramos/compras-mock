import React from 'react'
import ItemCarrinho from '../../components/carrinho/ItemCarrinho'
import {connect} from 'react-redux'

class Carrinho extends React.Component {
    render(){
        return (
            <div className="carrinho">
                {this.props.carrinho.map(item => {
                    return <ItemCarrinho key={item.nome} produto={item}/> 
                })}
            </div>
        )
    }
}

export default connect(state =>({carrinho: state.carrinho.carrinho}))(Carrinho)

