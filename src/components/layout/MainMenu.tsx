import { faAddressCard, faFileMedical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from "react-router-dom";
import './MainMenu.css';

export const MainMenu = () => {
    return <nav className="main-menu">
        <ul>
            <li>
                <Link to='/diseases'>
                    <span className="main-menu--item-icon">
                        <FontAwesomeIcon icon={faFileMedical} />
                    </span>
                    <span className="main-menu--item-label">Diseases Demo</span>
                </Link>
            </li>
            <li>
                <Link to='/forms'>
                    <span className="main-menu--item-icon">
                        <FontAwesomeIcon icon={faAddressCard} />
                    </span>
                    <span className="main-menu--item-label">Form Demo</span>
                </Link>
            </li>
        </ul>
    </nav>;
}