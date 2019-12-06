import React from 'react'
import ItemCarrinho from '../../components/carrinho/ItemCarrinho'
import Mensagem from '../../components/mensagem/Mensagem'
import {connect} from 'react-redux'
import Actions from '../../store/actions'
import formatarReal from '../../util/currency'
import BarraInferior from '../../components/barra/BarraInferior'

class Carrinho extends React.Component {

    finalizarCompra(){
        this.props.history.push('/shop')
        Actions.conteudoModal(
            {
                titulo: 'Compra Finalizada!',
                conteudo: <Mensagem conteudo="Sua compra foi finalizada com sucesso!"/>,
                grande: false,
                btnVoltar: true
            }
        )
        Actions.limparCarrinho()
    }

    render(){
        const tamanho = this.props.finalizando?"100px":"0"
        return (
            <div style={{height:"calc(100% - "+tamanho+")"}} className="carrinho">
                {this.props.quantidade_produto === 0 ? Actions.fecharModal():null}
                <div className="listaItens">
                    {this.props.finalizando?
                        <div className="titulo">
                            <button onClick={() => this.props.history.push('/shop')} className="btn-voltar botao-vermelho botao-quadrado">x</button>
                            Seu Carrinho
                        </div>
                    :null}
                    {this.props.carrinho.map(item => {
                        return ( 
                        <center>
                            <ItemCarrinho key={item.nome} produto={item}/> 
                        </center> ) 
                    })}
                    {!this.props.finalizando?
                        <div className="carrinhoFooter">{"Total: "+formatarReal(this.props.total)}</div>
                    :null}
                </div>
                {this.props.finalizando?
                    <div>
                        <div className="carrinhoFooter-final">{"Total: "+formatarReal(this.props.total)}</div>
                        <BarraInferior carrinho={false}     
                            titulo = "Finalizar Compra"
                            acao = {() => this.finalizarCompra()}
                        />
                    </div>
                :null}
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

