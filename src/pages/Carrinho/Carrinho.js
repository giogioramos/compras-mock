import React from 'react'
import ItemCarrinho from '../../components/carrinho/ItemCarrinho'
import {connect} from 'react-redux'
import Actions from '../../store/actions'
import formatarReal from '../../util/currency'

class Carrinho extends React.Component {
    render(){
        return (
            <div className="carrinho">
                {this.props.quantidade_produto === 0 ? Actions.fecharModal():null}
                <div className="listaItens">
                    {this.props.carrinho.map(item => {
                        return <ItemCarrinho key={item.nome} produto={item}/> 
                    })}
                    <hr />
                    <div className="carrinhoFooter">{"Total: "+formatarReal(this.props.total)}</div>
                </div>
            </div>
        )
    }
}

export default connect(
        state =>({
            carrinho: state.carrinho.carrinho,
            total: state.carrinho.total,
            quantidade_produto: state.carrinho.quantidade_produto
        })
    )(Carrinho)

