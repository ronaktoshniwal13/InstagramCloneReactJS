import React from 'react'

export default class account extends React.Component{

    

      handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          console.log(event.target.value)
        }
      }

    render() {
    
    return (
        
        <div>
            
        </div>
    )
}
}
