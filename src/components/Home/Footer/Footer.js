import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const ourAddress = [
        {name: "New York - 343434 Barandipara" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const services = [
        {name: "Emergency Service Care" , link: "/emergency"},
        {name: "Repair" , link: "/repair"},
        {name: "Service of Electronic Device Problem" , link: "/personal-service"},
        {name: "Service Extraction" , link: "/service-extract"},
        {name: "Repair" , link: "/repair"},
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">gi
                <div className="row py-5">
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+34343434</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;