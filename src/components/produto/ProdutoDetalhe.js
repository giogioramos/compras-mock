import React from 'react'
import {connect} from 'react-redux'
import formatarReal from '../../util/currency'

function ProdutoDetalhe({produto_atual}) {
        const styles = [
            {backgroundImage: "url("+require("../../assets/mock/"+produto_atual.marca_img)+")"},
            {backgroundImage: "url("+require("../../assets/mock/"+produto_atual.img)+")"}
        ]
        return (
            <div className="produtoDetalhe">
                <div style={styles[0]} className="det-logo"/>
                <div style={styles[1]} className="det-img"/>
                <div className="det-descricao">{produto_atual.nome}</div>
                <div className="det-valores">
                    <div className="det-preco">{formatarReal(produto_atual.valor)}</div>
                    <div className="separador">x</div>
                    <input type="number" max="999" min="1" value="999" readOnly />
                    <button className="botao--laranja">-</button>
                    <button className="botao--azul">+</button>
                </div>
                <div className="det-total">{formatarReal(produto_atual.valor * 1)}</div>
                <div className="detalhe-footer">
                    <button className="botao--vermelho">Voltar</button>
                    <button className="botao--azul">Adicionar</button>
                </div>
            </div>
        )
}

export default connect(state => ({ produto_atual: state.produto_atual}))(ProdutoDetalhe)
