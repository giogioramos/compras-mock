import React from 'react'

export default class Produto extends React.Component {
    render(){
        const styles = {
            background: "url("+require('../mock/hyperxram.jpg')+") center no-repeat",
            backgroundSize: "contain",
            width: 200,
            height: 200,
        }
        return (
            <div>
                <div style={styles}></div>
                <h4>{this.props.nome}</h4>
                <button>Adicionar</button>
            </div>
        )
    }
}
