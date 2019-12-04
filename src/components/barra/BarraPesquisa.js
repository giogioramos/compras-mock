import React from 'react'

class BarraPesquisa extends React.Component {
    render(){
        return (
            <header className="barraPesquisa">
                <div className="input-borda">
                    <input placeholder="Busque um Produto..." type="search"/>
                </div>
                <img src={require('../../assets/img/kabumarrow.png')} />
            </header>
        )
    }    
}

export default BarraPesquisa