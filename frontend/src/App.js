import React from 'react';
import Home from './pages/Home'
import M from 'materialize-css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/FootWeb'
import Cities from './pages/Cities'

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
                    <Route path='/Cities' component={Cities}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </>
    )
  }
}

export default App;
