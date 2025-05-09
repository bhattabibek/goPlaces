import React from "react";



const DestinationCard = () => {
  return (
    <>
     <div className="flex flex-col w-full gap-6 m-3 justify-center md:flex md:flex-row">
     <div className="shadow-lg">
        <img src="/nepal.jpg"/>
        <h2 className="text-center font-bold">Chitwan National Park</h2>
        <p className="p-6">animi doloremque voluptates nemo, cum delectus consectetur beatae consequatur error aliquam, repellat nesciunt nulla nam. Aliquam, odio qui quo sed commodi accusamus cum nam consequuntur illum incidunt vero quis eligendi?</p>
     <button className="bg-amber-500 p-4 rounded-tr-xl">Book Now</button>
      </div>
      <div className="shadow-lg">
        <img src="/mount.jpg"/>
        <h2 className="text-center font-bold">Mount Everest</h2>
        <p className="p-6">animi doloremque voluptates nemo, cum delectus consectetur beatae consequatur error aliquam, repellat nesciunt nulla nam. Aliquam, odio qui quo sed commodi accusamus cum nam consequuntur illum incidunt vero quis eligendi?</p>
        <button className="bg-amber-500 p-4 rounded-tr-xl">Book Now</button>
      </div>
      <div className="shadow-lg">
        <img src="/monastery.jpg"/>
        <h2 className="text-center font-bold">Bardiya National Park</h2>
        <p className="p-6">animi doloremque voluptates nemo, cum delectus consectetur beatae consequatur error aliquam, repellat nesciunt nulla nam. Aliquam, odio qui quo sed commodi accusamus cum nam consequuntur illum incidunt vero quis eligendi?</p>
        <button className="bg-amber-500 p-4 rounded-tr-xl">Book Now</button>
      </div>
      
     </div>
     
 
    </>

  )
}

export default DestinationCard