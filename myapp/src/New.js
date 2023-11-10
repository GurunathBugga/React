import React, {useState} from 'react'

const New = () => {
    const [input,setInput] = useState("");

    const handleInputChange = (e) => {
     setInput(e.target.value);
    
    }
    console.log(input);
  return (
    <div>
      <input type="text"  value={input} onChange ={handleInputChange}/>
     <b><p>You Typed : { input}</p></b>
    </div>
  )
}

export default New
