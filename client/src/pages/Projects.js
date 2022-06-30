import React from 'react';
import itsAmiibo from '../assets/its-amiibo-mario1.jpg';
import deepThoughts from '../assets/deep-thoughts1.jpg';
import budgetTracker from '../assets/budget-tracker1.jpg';

const Projects = () => {
    return (
        <main>
            <div className='flex-row justify-center mt-1'>
                <a href='https://deepthoughts1.herokuapp.com/' className='col-12 text-center '><h2 className='col-12 text-center text-light'>Deep Thoughts</h2></a>
                <p className='col-4 text-light' style={{ fontSize: '1.25rem' }}>A full-stack single page social media application. Uses multiple technologies including MongoDB, Apollo Server, Express.js, Node.js, and React.js. Users can create a profile, add friends, and post thoughts for others to react to and comment on.</p>
                <a href='https://deepthoughts1.herokuapp.com/' ><img src={deepThoughts}
                    alt='Deep Thoughts'
                    style={{ height: 150}}
                    // className='col-3'
                /></a>
               <a href='https://obiwan-jabronii.github.io/its-amiibo-mario/' className='col-12 text-center '><h2 className=' text-light'>It's Amiibo Mario</h2></a>
                <p className=' text-light col-4' style={{ fontSize: '1.25rem' }}>A front-end application that allows users to search for Amiibos by character name.  They are then given which Amiibos involve that character and where it can be purchased. This is accomplished by using multiple third party API's including ones from Nintendo and Ebay.</p>
                <a href='https://obiwan-jabronii.github.io/its-amiibo-mario/' ><img src={itsAmiibo}
                    alt='Its Amiibo Mario'
                    style={{ height: 150 }}
                    // className='col-3'
                /></a>
                <a href='https://obiwan-jabronii.github.io/its-amiibo-mario/' className='col-12 text-center '><h2 className='col-12 text-center text-light'>Budget Tracker</h2></a>
                <p className='col-4 text-light mb-1' style={{ fontSize: '1.25rem' }}>A budget tracking application. Allows users to add and subtract funds while compiling the inputs in a graph to show trends over time. A mostly back-end application, it uses MongoDB and Javascript logic to track inputs and update the graph in real time.</p>
                <a href='https://obiwan-jabronii.github.io/its-amiibo-mario/' ><img src={budgetTracker}
                    alt='Budget Tracker'
                    style={{ height: 150 }}
                    // className='col-3'
                /></a>
            </div>
        </main>
    )
};

export default Projects;
