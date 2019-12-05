import React from 'react'
import Actions from '../../store/actions'

class BarraPesquisa extends React.Component {
    render(){
        return (
            <header className="barraPesquisa">
                <div className="input-borda">
                    <input onChange={(event) => Actions.buscarProduto(event.target.value)} placeholder="Busque um Produto..." type="search"/>
                </div>
                {/* <img alt="" src={require('../../assets/img/kabumarrow.png')} /> */}
            </header>
        )
    }    
}

export default BarraPesquisa