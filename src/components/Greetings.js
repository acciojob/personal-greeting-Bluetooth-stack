import React, {useState} from "react";

const Greetings = ()=>{
    let [name, setName] = useState('');

    function greet(e){
        if(e.target.value!=""){
            setName("Hello "+e.target.value+"!");
        }
        else{
            setName('');
        }
    }

    return(
        <div>
            {/* <p></p> */}
            Enter your name:
            <input type="text" onChange={greet}/>
            <p>{name}</p>
        </div>
    )
}

export default Greetings;