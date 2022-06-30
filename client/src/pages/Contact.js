import React from 'react';

const Contact = () => {
    return (
        <main>
            <div className='mt-4'>
                <div className='card-header p-auto' >
                    <h3 style={{ fontWeight: 700, fontSize: "3rem", border: "solid 5px #049434" }} className='text-light text-center'>Contact Information</h3>
                </div>
                <div className='card-body' style={{ maxWidth: 800 }}>
                    <ul className=' text-light'>
                        <li>Tel.: (616)426-0687 </li>
                        <li>Email: mitchell_lough@yahoo.com</li>
                        <li>GitHub: <a href="http://github.com/Obiwan-Jabronii">http://github.com/Obiwan-Jabronii</a></li>
                        <li>LinkedIn: <a href="https://www.linkedin.com/in/mitchell-lough-664240201/">LinkedIn Profile</a></li>
                    </ul> 
                </div>
            </div>
        </main>
    )
};

export default Contact;

