import React from 'react'
import Produto from './Produto'
import './Produto.scss'
import '../../estilos/style.scss'
import { connect } from 'react-redux'
import Actions from '../../store/actions'

class ListaProdutos extends React.Component {
    componentDidMount(){
        this.fetchData();
    }
    
    fetchData(){
        const URL_BASE = 'http://localhost:3000/'
        fetch(URL_BASE+'marca/?_embed=produto')
        .then((res) => res.json())
        .then((marcas) => {
            let array = []
            marcas.map((marca) => 
            array = array.concat(marca.produto.map((produto) => {
                return {
                    "id": produto.id,
                    "nome": produto.nome,
                    "valor": produto.valor,
                    "img": produto.img,
                    "marca_nome": marca.nome,
                    "marca_id": marca.id,
                    "marca_img": marca.img
                }
            })
            ))
            Actions.limparProdutos()
            Actions.carregarProdutos(array)
        })
    }
    
    render(){
        const tamanho = this.props.reduzir?"110":"60"
        return (
            <section style={{height: "calc(100% - "+tamanho+"px)"}} className="listaProdutos">
                {this.props.produtos.map(
                        produto => {
                            let visible = produto.nome.toUpperCase().includes(this.props.busca.toUpperCase())?'block':'none'
                            return (
                            <Produto style={visible} key={produto.id} 
                                    nome = {produto.nome}
                                    destaque = {this.props.busca}
                                    img={produto.img} 
                                    marca_nome={produto.marca_nome} 
                                    marca_img={produto.marca_img} 
                                    valor={produto.valor} 
                                    quantidade={1}/>)
                        }
                )}
            </section>
        )
    }
}

export default connect(
    state => ({
        busca: state.util.busca,
        produtos: state.util.produtos
    })
)(ListaProdutos)
