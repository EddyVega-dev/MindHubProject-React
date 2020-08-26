import React from 'react';
import Home from './pages/Home'
import M from 'materialize-css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Header from './components/Header'
import FooterM from './components/FooterM'
import Cities from './pages/Cities'
import Itineraries from './pages/Itineraries'

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
                    <Route exact path='/' component={Home}/>
                    <Route path='/cities' component={Cities}/>
                    <Route path='/itineraries/:idCity' component={Itineraries}/>
                    <Redirect to='/'/>
                </Switch>
                <FooterM/>
            </BrowserRouter>
        </>
    )
  }
}

export default App;
