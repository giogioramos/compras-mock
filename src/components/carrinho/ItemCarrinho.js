import React from 'react'
import './carrinho.scss'
import '../../pages/Carrinho/Carrinho.scss'
import '../../estilos/style.scss'

import formatarReal from '../../util/currency'

export default class ItemCarrinho extends React.Component {
    render(){
        const style = {backgroundImage: "url("+require("../../assets/mock/"+this.props.produto.img)+")"}
        return (
            <div className="itemCarrinho">
                <hr />     
                <div className="descricao">{this.props.produto.nome}</div>
                <hr />            
                <div style={style} className="image" />
                <div className="valor">{formatarReal(this.props.produto.valor)}</div>
                <button className="botao-azul">+</button>
                <input value={this.props.produto.quantidade} type="number"/>
                <button className="botao-laranja">-</button>
                {/* <div className="total-caption">Total</div> */}
                {/* <div className="total">{formatarReal(this.props.produto.valor)}</div> */}
            </div>
        )
    }
}
