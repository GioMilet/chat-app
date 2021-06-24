import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: this.props.isOnline
        }
    }

    render() {
        return (
            <div className="Contact">
                <img className="avatar" src={this.props.avatar} alt={this.props.name} />
                <div>
                    <h4 className="name">{this.props.name}</h4>
                    <div className="status" onClick={event => {
                        const statusOnline = !this.state.online;
                        this.setState({
                            online: statusOnline
                        })
                    }}>
                        {this.state.online ? <p className="status-text">
                            <span className="status-online"></span>online</p> :
                            <p className="status-text"><span className="status-offline"></span>offline</p>}
                    </div>
                </div>
            </div>
        )
    }
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool
}

export default Contact
