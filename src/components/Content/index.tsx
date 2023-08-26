import { IProps } from "./models/content.model"


const Footer = ( { number,setNumber }:IProps ) => {
  return (
    <>
      <h2>{number}</h2>
      <button onClick={() => {
        setNumber(number+5);
      }}>
          Add
      </button>
    </>
  )
}

export default Footer