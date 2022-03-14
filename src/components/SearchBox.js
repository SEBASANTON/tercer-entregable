import React, { useState } from 'react';
import axios from 'axios';

const SearchBox = ({setLocation}) => {

    const [ typeId, setTypeId] = useState()

    const searchType = () =>{
        axios.get(`https://rickandmortyapi.com/api/location/${typeId}/`)
            .then(res => setLocation(res.data))    
    }

    return (
        <div>
            <input 
                type="number" 
                placeholder="Type a location"
                onChange={e => setTypeId(e.target.value)} 
                value={typeId}
            />

            <button onClick={searchType}>
                Search
            </button>
        </div>
    );
};

export default SearchBox;