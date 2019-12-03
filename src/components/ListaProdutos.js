import React, {Component} from 'react'
import Produto from './Produto'

export default class ListaProdutos extends Component {
   
    constructor(props){
        super(props)
        this.state = {
            carregando: true,
            produtos: []
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData(){
        fetch('http://localhost:3000/produtos')
        .then(response => response.json())
        .then(produtos => this.setState({produtos, carregando: false}))
        .catch(errors => console.log(errors))
    }

    render(){
        const {carregando, produtos} = this.state
        return (
            <div className="listaProdutos">
                {!carregando ? produtos.map(produto => {return <Produto key={produto.id} nome={produto.nome} img={produto.img}/>}) : null}
            </div>
        )
    }
}
