import React from 'react'
import Produto from './Produto'
import './Produto.scss'

export default class ListaProdutos extends React.Component {
   
    constructor(props){
        super(props)
        this.state = {
            produtos: []
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData(){
        const URL_BASE = 'http://localhost:3000/'
        let produtos = []
        fetch(URL_BASE + 'marca')
        .then(resposta => resposta.json())
        .then(marcas => {
            marcas.map( marca => {
                fetch(URL_BASE + 'marca/'+marca.id+'/produto')
                .then(resposta => resposta.json())
                .then(produtos => 
                    produtos.map(produto => {
                        return {
                            "id": produto.id,
                            "marca_nome": marca.nome,
                            "nome": produto.nome,
                            "valor": produto.valor,
                            "img": produto.img,
                            "marca_img": marca.img
                        }
                    })
                )
                .then((res) => {
                    produtos = produtos.concat(res)
                    this.setState({produtos})
                })
            })
        })
        .catch(erros => console.log(erros))
    }

    render(){
        const {produtos} = this.state
        return (
            <div className="listaProdutos">
                <div className="quebra"></div>
                {produtos.map(
                    produto => {
                        return (
                            <Produto 
                                key={produto.id} nome={produto.nome} img={produto.img}
                                marca_nome={produto.marca_nome} marca_img={produto.marca_img} 
                                valor={produto.valor}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
