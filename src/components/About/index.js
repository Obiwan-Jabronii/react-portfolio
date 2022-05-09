import React from "react";
import jumboTron from "../../assets/cover/laptop.jpg"

// render about section with splash image 
function About() {
    return(
        <div>
            <img src={jumboTron} alt="cover image" style={{ width:"60%" }} className="flex-row-center"></img>
            <p className="flex-row">
                    My name is Mitchell Lough and I am on my way to becoming a full-stack web developer. I have experience with HTML, CSS, JavaScript, <br></br>jQuery, MySQL, Node.js, Express.js, React.js, and MongoDB.
                I am looking to enter the web development field to further my education <br></br>and career. I am a graduate of the full-stack web development program through Michigan State University.
            </p>
        </div>
    )
}

export default About; 