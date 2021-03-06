import React from 'react'
import Home from './pages/Home'
import M from 'materialize-css'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Header from './components/Header'
import FooterM from './components/FooterM'
import Cities from './pages/Cities'
import Itineraries from './pages/Itineraries'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { connect } from 'react-redux'
import userAction from './redux/actions/userAction'

class App extends React.Component{
  
    componentDidMount(){
        M.AutoInit();
    }

    render(){

        return(
            <>
                <BrowserRouter>
                    <Header/>
                    <Switch>
                    {(this.props.response.token) ?
                        <>
                        <Route exact path='/' component={Home}/>
                        <Route path='/cities' component={Cities}/>
                        <Route path='/itineraries/:idCity' component={Itineraries}/>
                        <Route path='/signin' component={SignIn}/>
                        <Route path='/signup' component={SignUp}/>
                        <Redirect to='/'/>
                        </>
                        /* : (localStorage.getItem('token')) ? 
                                    
                        this.props.forcedLogin(localStorage.getItem('token')) */
                        :<>
                        <Route exact path='/' component={Home}/>
                        <Route path='/cities' component={Cities}/>
                        <Route path='/itineraries/:idCity' component={Itineraries}/>
                        <Route path='/signin' component={SignIn}/>
                        <Route path='/signup' component={SignUp}/>
                        <Redirect to='/'/>
                        </>
                    }
                    </Switch>
                    <FooterM/>
                </BrowserRouter>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        response: state.user,
    }
}

const mapDispatchToProps = {
    forcedLogin: userAction.forcedLogin,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
