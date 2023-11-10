import React,{useState ,useEffect} from 'react'



const Email = () => {
    const [ count, setCount] = useState (0);
    console.log("clicked Count" + count);
    useEffect ( () => console.log("Clicked"));

    const increment = () => {
        setCount(count+1);
    }

    const reset= () => {
      setCount(onreset);
  }

  return (
    <div>
        <h1><i>Clicked Count {count}  Times</i> </h1>
      <button onClick={ increment }  >Click</button>
      <h1><i>Clear {count}  </i> </h1>
      <button onClick={reset}  >Reset</button>
    </div>
  )
}

export default Email
