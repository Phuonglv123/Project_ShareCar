import React, { Component } from 'react';
import NavAdmin from './navAdmin';
import ContentAdmin from './contentAdmin';
import './styleAdmin.scss';

class AdminHomePage extends Component {
    render() {
        return (
            <div className="wrapper">
                <NavAdmin />
                <ContentAdmin />
            </div>
        );
    }
}

export default AdminHomePage;