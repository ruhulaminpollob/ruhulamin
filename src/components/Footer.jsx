import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex flex-wrap items-center space-y-5 justify-around">
                <p>&copy; 2023 Ruhul Amin. All rights reserved.</p>
                <div className="flex space-x-4 text-white">
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-4xl  hover:text-blue-700 cursor-pointer" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-4xl  hover:text-blue-700 cursor-pointer" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-4xl  hover:text-blue-700 cursor-pointer" />
                    </a>
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-gray-300">Terms of Service</a>
                    <a href="#" className="text-white hover:text-gray-300">Privacy Policy</a>
                    <a href="#contact" className="text-white hover:text-gray-300">Contact Us</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;