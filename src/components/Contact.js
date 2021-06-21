import React from 'react';
import './Contact.css';

function Contact() {
    const name = "Musashi Miyamoto";
    const avatar = "https://i.pinimg.com/originals/82/04/f5/8204f56fd44e3071fad7fff47f246766.jpg";
    const isOnline = true;
    return (
        <div className="Contact">
            <img className="avatar" src={avatar} alt={name} />
            <div>
                <h4 className="name">{name}</h4>
                <div className="status">
                    {isOnline ? <p className="status-text"><span className="status-online"></span>online</p> :
                        <p className="status-text"><span className="status-offline"></span>offline</p>}
                </div>
            </div>
        </div>
    )
}

export default Contact
