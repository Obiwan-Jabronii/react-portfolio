import React from 'react';
import meImage from '../assets/me.jpg'
import Image from 'react-bootstrap/Image';
import itsAmiibo from '../assets/its-amiibo-mario1.jpg';
import michiganTravel from '../assets/michigan-travel.jpg';
import demoShop from '../assets/demo-shop.jpg';
import orchardKids from '../assets/orchardKids.jpg';
import babaButterfly from '../assets/baba-butterfly.jpg';
import monkeyButterfly from '../assets/monkey-butterfly.jpg';
import theKids from '../assets/theKids.jpg';
import certificate from '../assets/certificate.jpg';

const Home = () => {

    return (
        <main>
            <>
            <div className=' container-fluid text-center jumbotron' >
            <Image src={meImage} alt='Mitchell Lough' className=' splash' roundedCircle></Image>
            <h1 style={{ color: 'var(--light)', fontSize: '3rem'}}>Full-Stack Web Developer</h1>
            <hr className=' col-sm-3' style={{ height: '3px', color: ' var(--light)', margin: '2rem auto', backgroundColor: 'var(--light)'}}></hr>
            </div>
            <div className='container-fluid about-section text-center' id='about'>
                <h1 style={{ color: 'var(--secondary)'}}>About Me</h1>
                <hr className=' col-sm-9' style={{ height: '3px', color: ' var(--light)', margin: '2rem auto', backgroundColor: 'var(--light)'}}></hr>
                <p>
                    I began my education in web development the winter of 2021. I began self teaching and 
                    enrolled in the full-stack web development certification<br /> program through Michigan State Universtiy the following fall. 
                    I graduated in March of 2022 and recieved my certificate shortly thereafter. Previously I worked as an operations <br />
                    lead at Tyson Foods and had been at the company for 4.5 years before leaving to focus entirely on my coding and
                    furthering my knowledge of the wonderful world of web development.<br/> I am lucky enough to be the father of two amazing children.
                    

                </p>
            </div>
            <div className='container-fluid carousel' >
                <div id="carouselExampleControls" class="carousel slide carousel-fade" data-bs-ride="true">
                    <div class="carousel-inner col-sm-12  ">
                        <div className="carousel-item active">
                        <img src={theKids} class="d-block carousel-img" alt="My kids"></img>
                        </div>
                        <div className="carousel-item">
                        <img src={orchardKids} class="d-block carousel-img" alt="My kids at an Orchard"></img>
                        </div>
                        <div className="carousel-item">
                        <img src={babaButterfly} class="d-block carousel-img" alt="My son on a butterfly"></img>
                        </div>
                        <div className="carousel-item">
                        <img src={monkeyButterfly} class="d-block carousel-img" alt="My daughter on a butterfly"></img>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
            </div>
            <div className='container-fluid' id='projects'>
                <div className='row'>
                    <div className='project-header'>
                        <h1 style={{ color: 'var(--secondary)'}}>Projects</h1>
                    </div>
                    <hr className=' col-sm-9' style={{ height: '3px', color: ' var(--secondary)', margin: '2rem auto', backgroundColor: 'var(--secondary)'}}></hr>
                    <div className=' col-12 col-sm-4 thumbnail'>
                        <a href='https://fathomless-caverns-31899.herokuapp.com/' ><Image src={michiganTravel} alt='Michigan Travel' rounded className='sample-img'></Image></a>
                        <p  className="thumbnail-p rounded">A travel blog site that lists various vacation spots in the beautiful state of Michigan. Users can create profiles and leave comments on destinations they have visited. This helps to create a community of travelers aiding each other in their adventures. It was built using MongoDB, Express.js, React.js, and Node.js.</p>
                    </div>
                    <div className=' col-12 col-sm-4 thumbnail'>
                        <a href='https://morning-brushlands-84788.herokuapp.com/' ><Image src={demoShop} alt='Demo Shop' rounded className='sample-img'></Image></a>
                        <p className="thumbnail-p rounded">A shopping app similar to Amazon that allows users to add items to a cart and checkout via stripe. Built by myself using MongoDB, Express.js, React.js, Node.js, and the Stripe API.</p>
                    </div>
                    <div className=' col-12 col-sm-4 thumbnail'>
                        <a href='https://obiwan-jabronii.github.io/its-amiibo-mario/' ><Image src={itsAmiibo} alt='ItsAmiibo' rounded className='sample-img'></Image></a>
                        <p className="thumbnail-p rounded">A front-end application that allows users to search for Amiibos by character name.  They are then given which Amiibos involve that character and where it can be purchased. This is accomplished by using multiple third party API's including ones from Nintendo and Ebay.</p>
                    </div>
                </div>
            </div>
            <div className='container-fluid certificate' id='cert'>
                <div className='row'>
                    <h1 style={{ color: 'var(--light)'}}>Certification and Links</h1>
                    <hr className=' col-sm-9' style={{ height: '3px', color: ' var(--dark)', margin: '2rem auto', backgroundColor: 'var(--dark)'}}></hr>
                    <div className='col-12 col-sm-6'>
                        <Image src={certificate} alt='MSU Certificate' className='certificate-img'></Image>
                    </div>
                    <div className='col-12 col-sm-6' style={{ textAlign: 'center' }}>
                        <ul className='links'>
                            <li className='links-item'><a href='http://github.com/Obiwan-Jabronii'>GitHub</a></li>
                            <li className='links-item'><a href='https://www.linkedin.com/in/mitchell-lough-664240201'>LinkedIn</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
            <div className='container-fluid contact-sample text-center' id='contact'>
                <h1>Contact Me</h1>
                <hr className=' col-sm-9' style={{ height: '3px', color: ' var(--light)', margin: '2rem auto', backgroundColor: 'var(--dark)'}}></hr>
                    <p><span class='glyphicon glyphicon-map-marker' />Grand Rapids, MI</p>
                    <p><span class='glyphicon glyphicon-envelope'></span>mitchell_lough@yahoo.com</p>
                    <p><span class='glyphicon glyphicon-earphone'></span>616-426-0687</p>

            </div>
            </>
        </main>
    )
}

export default Home;