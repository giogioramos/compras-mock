import React from 'react'
import Produto from './Produto'
import './Produto.scss'
import '../../estilos/style.scss'
import { connect } from 'react-redux'
import Actions from '../../store/actions'

class ListaProdutos extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         produtos: []
    //     }
    // }

    componentDidMount(){
        this.fetchData();
    }

    fetchData(){
        const URL_BASE = 'http://localhost:3000/'
        fetch(URL_BASE + 'marca')
        .then(resposta => resposta.json())
        .then(marcas => {
            marcas.map( marca => {
                fetch(URL_BASE + 'marca/'+marca.id+'/produto')
                .then(resposta => resposta.json())
                .then((produtos) => 
                    produtos.map(produto => {
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
                )
                .then(produtos => 
                    Actions.carregarProdutos(produtos)
                )
            })
        })
        .catch(erros => console.log(erros))
    }
    textoDestacado(texto, destaque) {
        var partes = texto.split(new RegExp(`(${destaque})`, 'gi'));
        return <>{partes.map(parte => parte.toLowerCase() === destaque.toLowerCase() ? <mark>{parte}</mark> : parte)}</>;
    }
    render(){
        const style = this.props.reduzir?{height:"calc(100% - 110px)"}:{height:"calc(100% - 60px)"}
        // const {produtos} = this.state
        return (
            <div style={style} className="listaProdutos">
                {this.props.produtos.map(
                    produto => {
                        return (
                            <>
                            {produto.nome.toUpperCase().includes(this.props.busca.toUpperCase())?
                                <Produto 
                                    key={produto.id} 
                                    nome={this.textoDestacado(produto.nome,this.props.busca)} 
                                    img={produto.img} 
                                    marca_nome={produto.marca_nome} 
                                    marca_img={produto.marca_img} 
                                    valor={produto.valor} 
                                    quantidade={1}/>
                            :null}
                            </>
                        )
                    })
                }
            </div>
        )
    }
}

export default connect(
    state => ({
        busca: state.util.busca,
        produtos: state.util.produtos
    })
)(ListaProdutos)
