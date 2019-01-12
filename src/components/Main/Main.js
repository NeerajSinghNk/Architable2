import React, { Component } from 'react'
import Filter from './Filter/Filter';
import DashNavbar from './Navbar/DashNavbar';
import Dashboard from './Dashboard/Dashboard';

export default class Main extends Component {
    render() {
    return (
        <div className="background">
        <DashNavbar/>
        <Filter />
        <Dashboard />
        </div>
    )
}
}
