import { useState, useEffect } from "react";

export function ReactCard({name,age}) {
    const [a, setA] = useState(0)
    console.log(name)
    
    return (
        <div>
            <h1>Hello World {name} {age}</h1>
            <button onClick={() => {
                setA(a+1)
            console.log(a)
            }}>Click</button>
            <p>{a}</p>
        </div>
    )
}


export function Aslam(props) {
    console.log(props.name)
    return (
        <p>Hi am {props.name}</p>
    )
}