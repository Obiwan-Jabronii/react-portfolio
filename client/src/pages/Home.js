import React from 'react';

const Home = () => {

    return (
        <main>
            <div className='flex-row justify-space-around'>
            <div className='flex-column justify-space-around home-container p-4' style={{  border: "solid #049434 5px", maxWidth: 600, backgroundColor: "rgba(0,0,0,.5)" }}>
                <h1 className='text-light'style={{ fontSize: 60 }}>Welcome!</h1>
                <p className='home-p' style={{ fontSize: "1.5rem"}}>Thank you for visiting my interactive portfolio! My name is Mitchell Lough and I have been an aspiring Full-Stack Web Developer since the spring of 2021. After receiving my certification through Michigan State University I began my journey.</p>
            </div>
            <div></div>
            </div>
        </main>
    )
}

export default Home;