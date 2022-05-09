import React, { useState } from "react";
import About from "../src/components/About/index";
import Nav from "../src/components/Nav/index";
//import Gallery from "../src/components/Gallery/index";
import "./index.css"


function App() {
  // creates the categories for the nav bar through prop drilling 
  const [categories] = useState([
    {
      name: 'education'
    },
    {
      name: 'experience'
    },
    {
      name: 'projects'
    },
    {
      name: 'contact'
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  // render main page with the serperate components 
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <About></About>
      </main>

    </div>
  );
}

export default App;
