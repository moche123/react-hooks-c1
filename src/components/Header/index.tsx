//Classes
import "./header.css";

//Interfaces
import { IHeader } from "./models/header.model";


const Header = (props:IHeader) => {
  return (
    <h2 className={ props.number%2 === 0 ? 'back-red' : 'back-blue' }>{props.title} - {props.number}</h2>
  )
}

export default Header