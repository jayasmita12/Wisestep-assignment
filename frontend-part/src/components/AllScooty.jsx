import React, { useState } from 'react'
import { useEffect } from 'react'
import "../main.css"
import axios from "axios"

export const AllScooty = () => {
    const [scooty, setScooty] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5700/scooty")
            .then(res => {
                setScooty(res.data.scootys)
            })
           .catch(err=>{
            console.log(err)
           })
        
    }, [])
    console.log(scooty)
    return (
       <div className='allscooty'>
        {scooty.map(e=>{
            return (
                <div>
                    <h2>{e.name}</h2>
                    <p>{e.desc}</p>
                    <h4>₹{e.price}</h4>
                    <button>Book Now</button>
                </div>
            )
        })}
       </div>
    )
}


