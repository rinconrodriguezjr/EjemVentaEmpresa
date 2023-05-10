import React from 'react';
import Portmain from "../assets/images/Portmain.jpg"
import uno from "../assets/images/uno.jpg"
import dos from "../assets/images/dos.jpg"
import tres from "../assets/images/tres.jpg"
import cuatro from "../assets/images/cuatro.jpg"
import images from "../exports/images"
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';




const About = () => {


    return (
        <div className='aboutcontainer'>
            <h6 className='learnaboutus'> Learn about Us</h6>
            <h2><b>WE ARE RELATED</b></h2> <br />
            <h1>“ Our passion for urban life could not be any stronger. We are committed to moving our communities forward and enriching people’s lives. ”</h1>
            <br /> <br /> <br />
            <h4>We are dedicated to creating memorable experiences, supporting our neighbors and giving back for a better tomorrow.</h4> <br />
            <div className='Portmain'>
                <img src={Portmain} alt="" />
            </div>



{/* 
            <motion.div className='slidercontainer'>

            <motion.div className='slider' drag="x" 
                dragConstraints={{right: 0, left: -2123}}>
                {images.map(image =>(
                    <motion.div className='item'> 
                        <img src={image} alt="" />
                    </motion.div>
                ))} <br /> <br />
            </motion.div>
            </motion.div> */}







            <h3>WHAT'S HAPPENING AROUND THE COMPANY</h3> <br />
            <div className='aboutarticlescontainer'> 
                <article>
                    <img src={uno} alt="" />
                    <h3>515 Fern office tower plan approved for West Palm Beach</h3>
                    <p> Expected to become the largest office building in downtown West Palm Beach, 515 Fern has received board approval for a 25-story tower that will feature 456,000 square feet of office space and 15,000 square feet of retail. Construction of 515 Fern is expected to begin in 2023 and to be completed in 2025, contributing to West Palm Beach as a vibrant destination for workers and visitors.
                    </p>
                    <Link>Read the Article</Link>
                </article>
                <article>
                    <img src={dos} alt="" />
                    <h3>The District Detroit selected for new loan program to introduce additional affordable housing in the city</h3>
                    <p> On January 10th, mixed-use destination The District Detroit was announced by Detroit Mayor Mike Duggan as the first recipient of a new loan program aimed to increase the city’s affordable housing. The District Detroit will include 10 buildings presenting residences with affordable and market rate housing, office, retail, a hotel and public space, as well as multi-building academic campus Detroit Center for Innovation. Once complete, The District Detroit will offer much-needed affordable housing, serve the community and spur inclusive economic development in Detroit and Michigan.
                    </p>
                    <Link>Read the Article</Link>
                </article>
                <article>
                    <img src={tres} alt="" />
                    <h3>KKR makes major expansion at 30 Hudson Yards</h3>
                    <p>
                    On January 6th, KKR announced a major expansion at 30 Hudson Yards, adding an additional 220,000 square feet to its existing 300,000-square-foot space in the building.
                    </p>
                    <Link>Read the Article</Link>
                </article>
                <article>
                    <img src={cuatro} alt="" />
                    <h3>Related Midwest reveals the development plans for an office tower in Chicago</h3>
                    <p>
                    On January 5th, Related Midwest revealed plans for an office tower in Chicago's Fulton Market neighborhood. 725 W. Randolph will offer 931,000 square feet of office space that will feature private terraces and indoor-outdoor amenity spaces on multiple floors. Amenities will include a rooftop pool, on-site restaurant and a flagship Equinox Fitness Club & Spa. Related Midwest also plans on developing 11,500 square feet of public open space at the base of the building. 
                    </p>
                    <Link>Read the Article</Link>
                </article>
            </div>
        </div>
    );
};

export default About;