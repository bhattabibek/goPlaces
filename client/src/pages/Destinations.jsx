import React, {useState } from 'react';

import DestinationCard from '../components/DestinationCard';

const Destinations = () => {
  const [search,setSearch] = useState('');


  const destinations = [
    {
      title: 'Paris',
      image: 'https://source.unsplash.com/400x300/?paris,eiffel',
      description: 'The city of lights, love, and art.',
    },
    {
      title: 'Tokyo',
      image: 'https://source.unsplash.com/400x300/?tokyo,japan',
      description: 'A blend of tradition and high-tech.',
    },
    {
      title: 'Kathmandu',
      image: 'https://source.unsplash.com/400x300/?kathmandu,nepal',
      description: 'Gateway to the Himalayas.',
    },
  ];

const handleSearch =(e)=>{
  setSearch(e.target.value);
}
  return (
    <>
    <div>

      <input type='text' value={search} onChange={handleSearch} placeholder='Search the Available desinations'/>
      <h2>Destinations</h2>
      {destinations.map((dest, index) => (
        <DestinationCard key={index} {...dest} />
      ))}
    </div>
    </>
  );
};

export default Destinations;
