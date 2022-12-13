import React from 'react';
import meImage from '../assets/me.jpg'


const About = () => {
    return (
        <main>
            <div className='my-4 flex-row justify-space-around mx-5' style={{ marginTop: "8%" }}>
                <p className='text-light p-4' style={{ fontSize: "1.5rem", border: 'solid 5px #049434', backgroundColor: "rgba(0,0,0,.5)"}}>
                    My name is Mitchell Lough.  I began my education in web <br />development the spring of 2021. I began self teaching and <br />
                    enrolled in the full-stack web development certification<br /> program through Michigan State Universtiy in the fall. <br />
                    I graduated in March of 2022 and recieved my certificate <br />shortly thereafter. Previously I worked as an operations <br />
                    lead at Tyson Foods and had been at the company for<br /> 4.5 years before leaving to focus entirely on my coding and <br />
                    furthering my knowledge of the wonderful world of web <br />development.
                </p>
                <img 
                    src={meImage}
                    alt='Mitchell Lough'
                    style={{minWidth: '20%', height: '425px', border: 'solid 5px #049434'}} />
            </div>
        </main>
    )
};

export default About;