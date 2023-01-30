import React from "react";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
      <header className="bg-light py-2 flex-row align-center">
        <div className=" flex-row justify-space-around align-center text-primary w-100" >
          <Link to="/">
            <h1 className="h1name">Mitchell Lough</h1>
          </Link>
  
          <nav className='text-center text-primary'>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#cert">Certification & Links</a>
            <a href="#contact">Contact</a>
            {/* <Link to="/comments">Comments</Link> */}
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  