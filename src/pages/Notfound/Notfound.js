import React from 'react';
import { Link } from 'react-router-dom';
import './Notfound.css';

const Notfound = () => {
    return (
        <div className="notFound">
             <img src="https://i.ibb.co/TKrtkyw/404imgg.gif" alt="" />
            <h2>Sorry , this page is not exist</h2>
             <p><b>Back to <Link to="/home">Home Page</Link></b></p>
        </div>
    );
};

export default Notfound;