import { useEffect, useState } from "react"


const sample=()=>{
    const [count,setCount]=useState(0)

    useEffect(()=>{
        console.log("useEffect",count)
    })

    return(
        <div>
           <button
           onClick={()=>{
            setCount(count+1)
           }}
           >click</button>
        </div>
    )
}

export default sample

