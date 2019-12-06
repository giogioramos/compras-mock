import React from 'react'
import formatarReal from '../../util/currency'
import Actions from '../../store/actions'
import { connect } from 'react-redux'

class ProdutoDetalhe extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            total: this.props.produto.valor,
            disableQtd: true
        }
    }

    render(){
        const styles = [
            {backgroundImage: "url("+require("../../assets/mock/"+this.props.produto.marca_img)+")"},
            {backgroundImage: "url("+require("../../assets/mock/"+this.props.produto.img)+")"}
        ]
        return (
            <div className="produtoDetalhe">
                <div style={styles[0]} className="det-logo"/>
                <div style={styles[1]} className="det-img"/>
               
                <div className="det-descricao">{this.props.produto.nome}</div>
                <hr />
                <div className="det-valores">
                    <div className="det-preco">{formatarReal(this.props.produto.valor)}</div>
                    <div className="separador">x</div>
                    <input type="number" value={this.props.produto.quantidade} readOnly />
                    <button disabled={this.props.produto.quantidade===1} onClick={() => Actions.alterarQtdProdutoAtual(-1)} className="botao-laranja">-</button>
                    <button onClick={() => Actions.alterarQtdProdutoAtual(1)} className="botao-azul">+</button>
                </div>
                <div className="det-total">{formatarReal(this.state.total * this.props.produto.quantidade)}</div>
                <hr />
                <div className="detalhe-footer">
                    <button onClick={() => Actions.visualizarProduto({})} className="botao-vermelho">Voltar</button>
                    <button onClick={() => Actions.addCarrinho(this.props.produto)} className="botao-azul">Adicionar</button>
                </div>
            </div>
        )
    }
}

export default connect(state => ({produto : state.carrinho.produto_atual}))(ProdutoDetalhe)
