import React from 'react';

export default () => {
    return (
    <nav className="navbar">
    <div className="container-fluid">
        <div className="navbar-header">
            <a className="navbar-brand" href="#">React Site</a>
        </div>
        <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="#">Page 1</a></li>
            <li><a href="#">Page 2</a></li>
            <li><a href="#">Page 3</a></li>
        </ul>
    </div>
    </nav>
    )
}