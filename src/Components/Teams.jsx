import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Teams = () => {

    const navigate = useNavigate();

    const goBack = () =>{
        navigate(-1)
    };

    const [name, setName] = useState("");

    const search = () =>{
        navigate()
    }

        
    return (
        <div className='techcontainer'>
            <h1>TEAMS</h1> <br />
            <button onClick={goBack} className="button">Go Back</button>



            <div>
                <input type="text" placeholder='search' onChange={e=> setName(e.target.value)}/>
            </div>
                <button onClick={()=>  navigate(`/team/${name}`)} className="button"> Search </button>
            
            
            
            
            
            
            <ul>
                <li className='teamslist'> <Link to={"/teams/FrontEnd"}> <b>FrontEnd</b></Link> </li>
                <li className='teamslist'> <Link to={"/teams/BackEnd"}> <b>BackEnd</b> </Link></li>
                <li className='teamslist'> <Link to={"/teams/Mobile"}> <b>Mobile</b></Link></li>
                <li className='teamslist'> <Link to={"/teams/Full Stack"}> <b>Full Stack</b></Link> </li>
            </ul> <br />
        </div>
    );
};

export default Teams;