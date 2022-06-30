import React from "react";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
      <header className="bg-light py-2 flex-row align-center">
        <div className=" flex-row justify-space-around-sm justify-center align-center text-primary w-100" >
          <Link to="/">
            <h1>Mitchell Lough</h1>
          </Link>
  
          <nav className='text-center text-primary'>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            {/* <Link to="/comments">Comments</Link> */}
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  