import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectsList = () => {

    const {list} = useParams();

    return (
        <div>
            <h1>PROJECT LIST:</h1>
            <br /> 
            <b>   Project number: <span>{list}</span> </b>
        </div>
    );
};

export default ProjectsList;