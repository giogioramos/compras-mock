import React from 'react'

export default class Produto extends React.Component {
    render(){
        const styles = {
            backgroundImage: "url("+require("../../assets/mock/"+this.props.img)+")"
        }
        return (
            <div className="produto">
                <label className="marca-logo">{this.props.marca}</label>
                <div className="img" style={styles}></div>
                <div className="produto-footer">
                    <div className="desc-container">
                        <label className="marca">{this.props.marca + ' - '}</label>
                        <label className="nome">{this.props.nome}</label>
                    </div>
                    <label className="valor">{this.props.valor}</label>
                    <button>COMPRAR</button>
                </div>
            </div>
        )
    }
}
