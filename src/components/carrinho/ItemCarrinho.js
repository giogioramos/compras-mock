import React from 'react'
import './carrinho.scss'
import '../../pages/Carrinho/CarrinhoPage.scss'
import '../../estilos/style.scss'
import Actions from '../../store/actions'
import formatarReal from '../../util/currency'

export default class ItemCarrinho extends React.Component {
    render(){
        const style = {backgroundImage: "url("+require("../../assets/mock/"+this.props.produto.img)+")"}
        return (
            <div className="itemCarrinho"> 
                <button 
                    onClick={() => Actions.deletarProduto(this.props.produto)}
                    className="botao-vermelho botao-quadrado"> x
                </button>
                <div style={style} className="image" />
                <div className="descricao">{this.props.produto.nome}</div>
                <div className="valor">{formatarReal(this.props.produto.valor)}</div>
                <button 
                    onClick={() => Actions.alterarQtdProdutoCarrinho(this.props.produto, -1)}
                    className="botao-laranja"> -
                </button>
                <input readOnly value={this.props.produto.quantidade} type="number"/>
                <button 
                    onClick={() => Actions.alterarQtdProdutoCarrinho(this.props.produto, 1)}
                    className="botao-azul"> +
                </button>
                <hr />
            </div>
        )
    }
}
