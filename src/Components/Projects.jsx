import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {


    const navigate = useNavigate();

    const goBack = () =>{
        navigate(-1)
    };

    return (
        <div className='techcontainer'>
            <h1> <b>PROJECTS</b></h1>
            <button onClick={goBack} className="button">Go Back</button>
            <ul>
                <li><b>Frontend Projects</b></li>
                        <ul>
                            <li>Portafolio</li>
                            <li>E-commerce</li>
                            <li>API & CRUDS</li>
                        </ul>
                <li><b>Backend Projects</b></li>
                        <ul>
                            <li>A</li>
                            <li>B</li>
                            <li>C</li>
                        </ul>
                <li><b>Full Stack Projects</b></li>
                        <ul>
                            <li>D</li>
                            <li>E</li>
                            <li>F</li>
                        </ul>
                <li><b>Mobile Projects</b></li>
                        <ul>
                            <li>G</li>
                            <li>H</li>
                            <li>I</li>
                        </ul>
            </ul>
        </div>
    );
};

export default Projects;