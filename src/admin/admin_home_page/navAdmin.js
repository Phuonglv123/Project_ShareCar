import React, {Component} from 'react';
import PropTypes from 'prop-types';

class navAdmin extends Component {
    render() {
        return (
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Bootstrap Sidebar</h3>
                    <strong>BS</strong>
                </div>

                <ul className="list-unstyled components">
                    <li className="active">
                        <a href="" data-toggle="collapse" aria-expanded="false" >
                            <i className="fas fa-home"></i>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-briefcase"></i>
                            About
                        </a>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" >
                            <i className="fas fa-copy"></i>
                            Pages
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-image"></i>
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-question"></i>
                            FAQ
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-paper-plane"></i>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

navAdmin.propTypes = {};

export default navAdmin;
