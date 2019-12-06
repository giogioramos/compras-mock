import React from 'react'
import './Splash.scss'
import {withRouter} from 'react-router-dom'

class Splash extends React.Component {
    constructor(){
        super()
        this.state = {
            ninjaPos: "100%",
            logoPos: "-100%",
            ninjaOpacidade: "1",
            logoOpacidade: "1"
        }
    }

    componentDidMount(){
        setTimeout(
            function() {
                this.setState({ninjaPos:"calc(100% - 175px)"})
                this.setState({logoPos:"15%"})
                setTimeout(
                    function() {
                        this.setState({ninjaOpacidade:"0"})
                        this.setState({logoOpacidade:"0"})
                        setTimeout(
                            function() {
                                this.props.history.push('/shop')
                            }
                            .bind(this),
                            1100
                        );
                    }
                    .bind(this),
                    1100
                );
            }
            .bind(this),
            100
        );
    }

    render(){
        return (
            <div className="splash">
                <img style={{top: this.state.ninjaPos, opacity: this.state.ninjaOpacidade}} className="ninja" alt="" src={require('../../assets/img/ninjarender.png')} />
                <img style={{top: this.state.logoPos, opacity: this.state.logoOpacidade}} className="logo-kabum" alt="" src={require('../../assets/img/logo.png')} />
            </div>
        )
    }
}

export default (withRouter(Splash))
