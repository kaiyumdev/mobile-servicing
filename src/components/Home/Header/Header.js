import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
 

const Header = () => {
    return (
        <div className="header-container">
         
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;