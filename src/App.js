import React, {Component} from 'react';
import Membre from './components/Membre'
import Button from './components/Button'
import './App.css';

const famille = {
 
  
  Membre1: {
    nom: 'anthoine',
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
  handleClick = () => console.log('click')
  
  render(){ 
    const {titre} = this.props
    const {famille} = this.state
    
    return(
      <div className="App">
      <h1>{titre}</h1>
        <Membre nom={famille.Membre1.nom} />
        <Membre nom={famille.Membre2.nom}/>
        <Membre nom={famille.Membre3.nom} />
        <Membre nom={famille.Membre4.nom} />
        <Membre nom={famille.Membre5.nom} />
        <Membre nom={this.state.famille.Membre6.nom} />
       <Membre nom={famille.Membre7.nom}>
        <strong>Je suis un homme</strong>
        </Membre>
        <Button />
        <button 
        onClick={this.handleClick}
        >
        Vieillir
        </button>
        
      
      </div>
    
    )
  } 
}

export default App;
