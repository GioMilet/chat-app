import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

function Contact(props) {


    return (
        <div className="Contact">
            <img className="avatar" src={props.avatar} alt={props.name} />
            <div>
                <h4 className="name">{props.name}</h4>
                <div className="status">
                    {props.isOnline ? <p className="status-text">
                        <span className="status-online"></span>online</p> :
                        <p className="status-text"><span className="status-offline"></span>offline</p>}
                </div>
            </div>
        </div>
    )
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool
}

export default Contact
