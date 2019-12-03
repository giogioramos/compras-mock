import React from 'react'
import './Produto.scss'
import formatarReal from '../../util/currency'

export default class Produto extends React.Component {
    constructor(props){
        super(props)
        this.sayHello = this.sayHello.bind(this);
    }

    sayHello(){
        console.log('AHHHHHHHHHHHHH!')
    }

    render(){
        const styles = [
            {backgroundImage: "url("+require("../../assets/mock/"+this.props.marca_img)+")"},
            {backgroundImage: "url("+require("../../assets/mock/"+this.props.img)+")"}
        ]
        return (
            <div className="produto">
                <label className="marca-logo" style={styles[0]}></label>
                <div className="img" style={styles[1]}></div>
                <div className="produto-footer">
                    <div className="desc-container">
                        <label className="marca">{this.props.marca_nome + ' '}</label>
                        <label className="nome">{this.props.nome}</label>
                    </div>
                    <label className="valor">{formatarReal(this.props.valor)}</label>
                    <button onClick={this.sayHello()} className="botao--laranja">COMPRAR</button>
                </div>
            </div>
        )
    }
}
