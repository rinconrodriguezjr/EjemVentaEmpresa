import React from 'react';
import { useNavigate } from 'react-router-dom';

const Technologies = () => {

    const navigate = useNavigate();

    const goBack = () =>{
        navigate(-1)
    };

    return (
        <div className='techcontainer'>
            <h1><b> OUR TECHNOLOGIES</b></h1>
            <button onClick={goBack} className="button">Go Back</button>
            <ul>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>Java</li>
            </ul>
            <h2>Next Technologies</h2>
            <ul>
                <li>Node Js</li>
                <li>Phyton</li>
                <li>Scrum Master</li>
            </ul>
        </div>
    );
};

export default Technologies;