import React, {Component} from 'react';
import Membre from './components/Membre'
import Button from './components/Button'
import './App.css';

const famille = {
 
  
  Membre1: {
    nom: 'antho',
    age:  18
  },
  
  Membre2: {
    nom: 'ada',
    age: 65
  },
  
  Membre3: {
    nom: 'amy' ,
    age: 45
  },
  
  Membre4: {
    nom: 'lily' ,
    age: 2
  },
  
  Membre5: {
    nom: 'seb',
    age: 15
  },
  
  Membre6: {
    nom: 'oury',
    age: 10
  },
  Membre7: {
    nom: 'sadjo',
    age: 34
  }
}

class  App extends Component {
  state = {
    famille
  }
  render(){ 
    const {titre} = this.props
    
    return(
      <div className="App">
      <h1>{titre}</h1>
        <Membre nom='antho' />
        <Membre nom='ada'/>
        <Membre nom='amy' />
        <Membre nom='Lily' />
        <Membre nom='oury' />
       <Membre nom='sadjo'>
        <strong>Je suis un homme</strong>
        </Membre>
        <Button />
      
      </div>
    
    )
  } 
}

export default App;
