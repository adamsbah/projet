import React, { Fragment } from 'react'

 const Membre = ({nom, age, children}) => {
     
    return (
        <Fragment>
            <h3 style={{
                backgroundColor: age < 18 ? 'blue' : 'green',
                color: age < 18 ? 'black' : 'white'}}> 
                {nom.toUpperCase()} : {age}</h3>
                {children ?   <p>{children}</p> : ""} 
              
            </Fragment>
        )
    }
 
export default Membre
