import React from "react";
import './footer.scss';

const Footer = () => {
    return(
        <div className="c-onlineshop-footer">
            <ul className="c-onlineshop-footer-list">
                <li className="c-onlineshop-footer-list__link company-name">
                    ABC Pty Ltd
                </li>
                <li className="c-onlineshop-footer-list__link">Contact Us</li>
                <li className="c-onlineshop-footer-list__link">Follow Us</li>
            </ul>
        </div>
    )
}

export default Footer