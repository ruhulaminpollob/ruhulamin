import React from 'react';
import { FaDownload, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import resumeFile from '../assets/resume.pdf'
import { Bounce, Fade } from 'react-reveal';

const Home = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = "Ruhul_Amin_resume.pdf";
    link.click();
  };



  return (
    <section id="home" className="bg-gray-100 py-20">
      <div className="container mx-auto flex flex-col items-center justify-around space-y-8 lg:flex-row lg:space-y-0">
        <div className="flex flex-col items-center lg:items-start space-y-1 md:space-y-3">
          <Fade left>

            <h1 className="text-2xl lg:text-5xl font-bold">I am</h1>
          </Fade>
          <Fade right>

            <h2 className="text-4xl lg:text-6xl font-bold text-blue-600">Ruhul Amin</h2>
          </Fade>
          <Fade left>

          <p className="text-lg lg:text-xl">Fullstack Developer</p>
          </Fade>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-3 md:px-6 md:py-3 py-2 rounded-lg font-semibold border-2  border-blue-600 hover:bg-transparent hover:text-blue-600" onClick={handleDownloadResume}>
              Download Resume <FaDownload className='inline-block'></FaDownload>
            </button>
            <a href="#contact" className="bg-transparent text-blue-600 px-3 md:px-6 md:py-3 py-2 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-600 hover:text-white">
              Let's Talk
            </a>
          </div>
          <div className="flex space-x-4 mt-8">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl md:text-4xl hover:text-blue-700 cursor-pointer" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl md:text-4xl  hover:text-blue-700 cursor-pointer" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl md:text-4xl  hover:text-blue-700 cursor-pointer" />
            </a>
          </div>
        </div>

        <Bounce duration={5000} delay={500} >
          <div className='  bg-gradient-to-r from-blue-600 via-blue-300 to-blue-600 rounded-tr-full rounded-tl-full'>
            <img className='w-72 md:94' src="https://i.ibb.co/GR5m4qB/ruhulamin.png" alt="Ruhul Amin" />
          </div>
        </Bounce>
        
      </div>
    </section>
  );
};

export default Home;