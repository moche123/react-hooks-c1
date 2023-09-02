import { 
     useEffect,
     useRef, useState } from "react";

/* Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect
  either doesn't have a dependency array, or one of the dependencies changes on every render.
    at UseRefTemplate 

**/

function UseRefTemplate() {
    const [name, setName] = useState('');
    // const renderCount = useRef(1)
    //const inputRef = useRef();

    const prevName = useRef('')
    // useEffect(() => {

    // }, []); //! SE EJECUTA UNA SOLA VEZ

    // useEffect(() => {
    //     console.log('Re render');
    //     renderCount.current = renderCount.current + 1;
    // });

    useEffect(() => {
        prevName.current = name; //*prevName = 'abc'
    });

    // function focus() {
    //     inputRef.current?.focus();

    //     inputRef.current.value = 'Text'
    // }


  
    return (
    <>
        <input 
        // ref={inputRef}
         value={ name } onChange={ (e) => setName( e.target.value )  } /> 'abc'
        <div>My name is {name} and it used to be { prevName.current } </div> 'ab'
        {/* <button onClick={ focus }>FOCUS</button> */}
        {/* <p>Se esta renderizando { renderCount.current } veces </p> */}
    </>
  )
}

export default UseRefTemplate