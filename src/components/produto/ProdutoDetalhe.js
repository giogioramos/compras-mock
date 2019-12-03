import React from 'react'

export default class ProdutoDetalhe extends React.Component {
    render(){
        // const styles = [
        //     {backgroundImage: "url("+require("../../assets/mock/"+this.props.marca_img)+")"},
        //     {backgroundImage: "url("+require("../../assets/mock/"+this.props.img)+")"}
        // ]
        return (
            <div className="produtoDetalhe">
                {/* <div style={styles[0]} className="det-logo"/>
                <div style={styles[1]} className="det-img"/>
                <div>
                    <label className="det-descricao">{this.props.nome}</label>
                </div>
                <div>
                    <label className="det-valor">{this.props.valor}</label>
                    <button className="botao--azul">-</button>
                    <input type="number" max="999" Min="1" />
                    <button className="botao--azul">+</button>
                    <label className="det-total">{this.props.valor * 1}</label>
                </div>
                <div className="detalhe-footer">
                    <button className="botao--vermelho">Voltar</button>
                    <button className="botao--azul">Adicionar</button>
                </div> */}
            </div>
        )
    }
    
}
