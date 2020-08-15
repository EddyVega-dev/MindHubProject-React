import React from 'react';
import Home from './pages/Home'
import M from 'materialize-css';

class App extends React.Component{
  
    componentDidMount(){
        M.AutoInit();
    }
  
    render(){
    return(
      <div className="App">
        <Home/>
      </div>
    )
  }
}

export default App;
