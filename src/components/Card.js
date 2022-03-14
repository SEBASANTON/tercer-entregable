import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import SearchBox from './SearchBox';
import UsersList from './UsersList';
import imgletters from '../assets/letras-rickyandmorty2.png'
import imgmovement from '../assets/rick-and-morty-rick.gif'

const Card = () => {

    const [location, setLocation] = useState({})

    useEffect(()=>{
  
      const random = Math.floor(Math.random() * 126) + 1;
  
      axios.get(`https://rickandmortyapi.com/api/location/${random}`)
        .then((res) => setLocation(res.data));
    },[])
  
    console.log(location)
    
    return (
        <div>
            <header>
            <img className="imgmovement2"src={imgmovement} alt="" />
            <img className="imgletters"src={imgletters} alt="" />
            <img className="imgmovement"src={imgmovement} alt="" />

            </header>
            <h1>{location.name}</h1>
            <SearchBox setLocation = {setLocation}/>
            <div className="first-info">
            <p><b>Type <br></br></b> {location.type}</p>
            <p><b>Dimension <br></br></b>{location.dimension}</p>
            <p><b>Population <br></br></b>{location.residents?.length}</p>
            </div>
            <h2>Residents</h2>
            <UsersList users={location.residents}/>
        </div>
    );
};

export default Card;