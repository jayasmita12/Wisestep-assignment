import React from 'react'
import { Link } from 'react-router-dom'

export const AllOutlets = () => {
  return (
    <div style={{textAlign:"center"}}>
        <div>
           <Link to="/honda"> <h2>Honda</h2></Link>
        </div>
        <div>
            <h2>Suzuki</h2>
        </div>
        <div>
           <h2>Hero</h2> 
        </div>
        <div>
          <h2> TVS</h2> 
        </div>
    </div>
  )
}


