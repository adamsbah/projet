import React, { Fragment } from 'react'

 const Membre = ({nom, children}) => {
     
    return (
        <Fragment>
            <h3>Membre de la famille: {nom.toUpperCase()}</h3>
            {children ?   <p>{children}</p> : ""} 
          
        </Fragment>
    )
}
 
export default Membre
