import { IProps } from "./models/footer.model"


const Footer = ( { copy,year,number }:IProps ) => {

  let contentNumber = null;
  if(number > 20){
    contentNumber = <h3>Is {number}</h3>
  }

  return (
    <>
      <h2>{copy} - {year}</h2>
      {contentNumber}

      { number > 30 && <h3>Es mayor a 30</h3> }

      { number > 10 ? <h3>Es mayor a 10</h3> : <h3>Es menor a 10</h3> }
    </>

  )
}

export default Footer