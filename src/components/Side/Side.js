import React from "react";
import {Link} from 'react-router-dom';


const Side = () => {
    return(
        <div>
            {/*header*/}
            <div>
                <h2>My own Todo application</h2>
            </div>
            <div>
                <ul>
                    <li><Link to='/'>All</Link></li>
                    <li><Link to='/done'>Done</Link></li>
                    <li><Link to='/undone'>Undone</Link></li>
                </ul>
            </div>
        </div>
    )
};


export default Side
