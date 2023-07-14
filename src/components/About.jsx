import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Bounce, Fade } from 'react-reveal';

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-6xl text-center  font-bold mb-4 md:mb-20">About Me</h2>
        <div className="container mx-auto flex flex-col items-center justify-around space-y-8 lg:flex-row lg:space-y-0">
          <Bounce duration={5000} delay={500} >
            <div className='  bg-gradient-to-r from-blue-600 via-blue-300 to-blue-600 rounded-tr-full rounded-tl-full'>
              <img className='w-72 md:94' src="https://i.ibb.co/GR5m4qB/ruhulamin.png" alt="Ruhul Amin" />
            </div>
          </Bounce>
          <div className=" items-center lg:items-start px-3 md:w-1/2 text-justify font-bold text-gray-600">
            <Fade right>
              <h1 className='text-2xl font-bold '>This is Ruhul Amin</h1>
              <p>I am a highly motivated frontend developer with a passion for creating beautiful and user-friendly
                web interfaces. I have a solid understanding of responsive web development and a keen eye for
                design. I strive to deliver exceptional user experiences that drive business growth. My proficiency
                in HTML, CSS, JavaScript, and React.js allows me to create visually appealing and intuitive
                interfaces that engage users effectively.
                During my career, I have successfully implemented secure user authentication systems using
                JSON Web Tokens (JWT) and integrated payment systems for seamless online transactions.
                Additionally, I have experience working with frontend frameworks such as Bootstrap and Tailwind
                CSS, as well as backend technologies including Express and Node.js. My knowledge extends to
                database management using MongoDB and authentication services like Firebase.</p>
              <div className="flex space-x-4 mt-8">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-4xl text-blue-600 hover:text-blue-700 cursor-pointer" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-4xl text-blue-600 hover:text-blue-700 cursor-pointer" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-4xl text-blue-600 hover:text-blue-700 cursor-pointer" />
                </a>
              </div>
            </Fade>

          </div>


        </div>
      </div>
    </section>
  );
};

export default About;
