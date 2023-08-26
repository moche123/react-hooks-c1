
import React, {  useEffect, useState } from "react"
import "./App.css"

import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"
import axios from "axios"
import { IUserApi } from "./models/user.model"
import useFetch from "./custom-hooks/useFetch";

const App = () => {
  // const number = 2;
  const [number, setNumber] = useState(0);
  const [id, setId] = useState(1);
  const [user, setUser ] = useState<IUserApi>({
    data: {
      userId: 0,
      id: 0,
      title: 'Title',
      completed: false
    }
  });

  const [dataFetch] = useFetch(`https://jsonplaceholder.typicode.com/todos/${id}`);


  const changeId = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setId(parseInt(ev.target.value));
  }


  useEffect(() => {
    //!montaje
    let interval=0;
    if(id>0 && id<=200){

      axios.get<IUserApi>( `https://jsonplaceholder.typicode.com/todos/${id}` )
           .then( (res) => {
            setUser(res);
            console.log(user.data.title)
           } )
  
      interval = setInterval( ()=> {
        console.log('Interval....');
      } ,1000 )
    }
  
    return () => { //!destroy - se usa para limpiar y evitar pérdidas de meoria
      console.log('Clean Interval')
      clearInterval(interval); 
    }
  }, [ id,user.data.title ]) //!actualizacion
  

  return (
    <React.Fragment>

    
      {user?.data?.title}

      { dataFetch && <p key={dataFetch.id}>{dataFetch.title}</p> }

      <Header title="Hello everyone" number={number} />

      <input type="text" onInput={ (ev:React.ChangeEvent<HTMLInputElement>)=> changeId(ev) } />
      

      <Content number={number} setNumber={setNumber} />
      <Footer number={number} copy="@myapp" year="2023" />

    </React.Fragment>
  )
}

export default App
