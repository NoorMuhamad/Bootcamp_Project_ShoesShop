import React from 'react'
import { Link } from "react-router-dom";

const Navbarmenu = () => {
    return (
        <div>
        <h5 style={{color : '#A9A9A9', textAlign: 'center'}}>Powered by NOORMUHAMMAD</h5>
            <nav>
                <ul>
                    <li>
                        <Link to="/">FEED</Link>
                    </li>
                    <li>
                        <Link to="/">IN STOCK</Link>
                    </li>
                    <li>
                        <Link to="/">UPCOMING</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbarmenu
