import React, { Fragment } from 'react'

 const Membre = ({nom, age, children}) => {
     
    return (
        <Fragment>
            <h3> {nom.toUpperCase()} : {age}</h3>
            {children ?   <p>{children}</p> : ""} 
          
        </Fragment>
    )
}
 
export default Membre
