import React from 'react';
import logo from '../imgs/LogoMain.png';

const Footer = () => {
    return (
        <footer className="bg-[#262626] p-4 border-t-4 border-[#2271D1] text-white">
            <div className=' flex justify-center'>
            <img src={logo} alt="Logo" />                 
            
            </div>
            
        </footer>
    );
};

export default Footer;
