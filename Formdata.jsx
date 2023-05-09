import React, {Component} from 'react'

function Formdata (props){
    let {handleBack, users}  =props
    return (
        <div>
            {users.map((item, index) => {
              return (
                <>
                  <div key={index}>
                    <h3>Name = {item.name}</h3>
                    <h3>Dept ={item.dept}</h3>
                    <h3>Rat ={item.rat}</h3>
                    <hr />
                  </div>
                </>
              )
            })}
            <button onClick={handleBack}>Go Back</button>
          </div>
    )
}

export default Formdata


