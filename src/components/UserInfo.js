import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserInfo = ({userURL}) => {

    const [ contentId, setContentId] = useState({})


    useEffect(()=>{
        axios.get(userURL)
            .then(res => setContentId(res.data))
    },[userURL])

    console.log(contentId)

    return (
        <div className="user">
            <img src={contentId.image} alt="" />
            <h3>{contentId.name}</h3>
            <hr />
            <ul>
            <p><b><span>Status | </span>  </b>{contentId.status}</p>
            <p><b><span>Episodes where appear | </span>  </b>{contentId.episode?.length}</p>
            <p><b><span>Origin | </span>  </b>{contentId.origin?.name}</p>
            </ul>
        </div>
    );
};

export default UserInfo;