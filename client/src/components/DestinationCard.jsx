import React from "react";


const DestinationCard = ({image,title,description}) => {
  return (
    <>
    
    <div>
      <img src={image} alt="title"/>
      <div>
       <h3>{title}</h3>
       <p>{description}</p>
      </div>
    </div>
    </>

  )
}

export default DestinationCard