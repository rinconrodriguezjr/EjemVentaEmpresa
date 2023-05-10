import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const TeamGroups = () => {
    
    const {group} = useParams();

    const navigate = useNavigate();

    const goBack = () =>{
        navigate(-1)
    };


    return (
        <div> <br />
            <h1>TEAM GROUPS: </h1> <br />
            <button onClick={goBack} className="button">Go Back</button> <br />
            <br /> <hr /> <br />
            <b>Name group:</b> {group}
        </div>
    );
};

export default TeamGroups;