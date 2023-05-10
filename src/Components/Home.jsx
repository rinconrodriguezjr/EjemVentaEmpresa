import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

const Home = () => {

    const [go, setGo] = useState();

    const navigate = useNavigate();

    const validation = () =>{
        if(go === "manzana"){
            navigate("/Technologies");
        } else {alert( "Santo y Seña incorrecto")
    }};


    const redirectToProjects = () => {
            navigate("/Projects")
    };

    const redirectToTechnologies = () => {
        navigate("/Technologies")
    };

    const redirectToTeams = () => {
        navigate("/Teams")
    };

    return (
        <div className='homecontainer'>
            <h2> <b>WE ARE RELATED</b> </h2>
            <br /> <br />
            <h1><b>Celebrating the communities who inspire and uplift us everyday</b></h1>
            <br /> <br />
            <p>We are dedicated to creating memorable experiences, supporting our neighbors and giving back for a better tomorrow.</p>  
            <br /> <hr />
                <Link to="/about">Learn About Us</Link>
            <br /> <hr />   <br />
                <h3>Projects  {" "} <button onClick={redirectToProjects} className="button">Go to Projects</button> </h3>
            <br />
                <h3>Technologies {" "} <button onClick={redirectToTechnologies} className="button">Go to Technologies</button></h3>
            <br />
                <h3>Teams {" "} <button onClick={redirectToTeams} className="button">Go to Teams</button></h3>
            <br /> <hr /> <br />

            <div>
                <input 
                    type="password" 
                    value={go}
                    placeholder='Escriba el Santo y Seña'
                    onChange={e => setGo(e.target.value)}/> {" "}
                <button onClick={validation}  className="button"> {" "}Santo y Seña {" "}</button>
            </div>

        </div>
    );
};

export default Home;