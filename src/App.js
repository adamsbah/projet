import React, { Component } from 'react';
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
};

class  App extends Component {
  state = {
    famille,
    isShow: false
  }
  
  handleClick = num => {
    
    const famille = { ...this.state.famille }
    famille.Membre1.age += num
    this.setState( {famille} )
  }
  
  handleChage = event => {
    
    const famille = { ...this.state.famille } 
    const nom = event.target.value
    console.log(nom)
    famille.Membre1.nom= nom
    this.setState({famille})
  }
  
  handleShowDescription = () => {
    const isShow = !this.state.isShow
    this.setState({isShow})
  }
  render(){ 
    const {titre} = this.props
    const {famille, isShow} = this.state
    
    
    return(
      <div className= "App">
      <h1>{titre}</h1>
      <input  value={famille.Membre1.nom} onChange={this.handleChange} type="text" />
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
       
       { isShow ? <strong>Je suis un homme.</strong> : null}
       
        </Membre>
        <button onClick={this.handleShowDescription}>
        {isShow ? 'Cacher' :'Montrer'}
        </button>
        
        <Button
        vieillir={() => this.handleClick(2)} />
       
        
      
      </div>
    
    )
  } 
}

export default App;
