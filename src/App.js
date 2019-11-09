import React, {Component} from 'react';
import Membre from './components/Membre'
import Button from './components/Button'
import './App.css';

class  App extends Component {
  render(){ 
    const {titre} = this.props
    return (
    
      <div className="App">
      <h1>{titre}</h1>
        <Membre 
        nom='ada'/>
        <Membre
        nom='amy' />
        <Membre
        nom='Lily' />
        <Membre
        nom='oury' />
      
        <Membre nom='sadjo'>
        <strong>Je suis un homme</strong>
        </Membre>
        <Button />
      
      </div>
    
    )
  } 
}

export default App;
