import React, {useEffect} from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;
    // changes title to the current category name 
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);
    // render nav bar 
    return (
        <header>
            <h1 className="name"> 
                <a data-testid="link" href="/">Mitchell Lough </a>
            </h1>
        <nav>
             <ul className="nav">
                {categories.map((category) => (
                    <li
                        className={`mx-1 ${ currentCategory.name === category.name}`}
                        key={category.name}
                        >
                    <span onClick = {() => {setCurrentCategory(category)}}>
                        {capitalizeFirstLetter(category.name)}
                    </span>
                    </li>
                ))}  
             </ul>
        </nav>
        </header>
    );
};

export default Nav