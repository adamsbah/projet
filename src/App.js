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
  handleClick = () => {
    
    const famille = { ...this.state.famille}
    famille.Membre1.age += 2
    this.setState( {famille} )
  }
  
  render(){ 
    const {titre} = this.props
    const {famille} = this.state
    
    return(
      <div className="App">
      <h1>{titre}</h1>
        <Membre 
        age={famille.Membre1.age}
        nom={famille.Membre1.nom} />
        <Membre
         age={famille.Membre2.age} 
        nom={famille.Membre2.nom}/>
        <Membre 
         age={famille.Membre3.age}
        nom={famille.Membre3.nom} />
        <Membre
         age={famille.Membre4.age} 
        nom={famille.Membre4.nom} />
        <Membre
         age={famille.Membre5.age} 
        nom={famille.Membre5.nom} />
        <Membre 
         age={famille.Membre6.age}
        nom={this.state.famille.Membre6.nom} />
       <Membre
        age={famille.Membre7.age} 
       nom={famille.Membre7.nom}>
        <strong>Je suis un homme</strong>
        </Membre>
        <Button
        vieillir={() => this.handleClick(2)} />
       
        
      
      </div>
    
    )
  } 
}

export default App;
