import React, { useEffect, useState } from 'react'
import './Advice.css'

function Advice() {
    const[adviceCount,setAdviceCount]=useState(-1)
    const[advice,setAdvice]=useState("Click the button to get a free Advice") 
    const handleUpdate=async ()=>{
        setAdviceCount(adviceCount+1)
        const res=await fetch('https://api.adviceslip.com/advice')
        const data=await res.json()
        setAdvice(data.slip.advice)

     }
     useEffect(()=>{
        handleUpdate();
        }
     ,[])

  return (
    <div className='Advice'>
     
        <h2>{advice}</h2>
        <button onClick={handleUpdate}>Get An Free Advice</button>
        <p>Advice Count is <span>{adviceCount}</span></p>
       

    </div>
  )
}

export default Advice