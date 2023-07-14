import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-20">
      <h2 className="md:text-6xl text-3xl underline my-10 md:my-20 font-bold text-center mb-10">Projects</h2>
      <div className="container mx-auto space-y-10 md:space-y-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className='h-96 rounded border-blue-600 border-4  overflow-hidden'>

            <div className="project-screenshot relative">
              <img className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform hover:-translate-y-3/4" src="https://i.ibb.co/Y22xcY0/project3.png" alt="Project Screenshot" />
            </div>
          </div>
          <div className="project-description  ">
            <h1 className='text-2xl  md:text-4xl font-bold'>Project-1: Dream Paint</h1>
            <div className="project-links space-x-5 mb-5 flex flex-wrap justify-center mt-5 text-center">
              <a className=' bg-blue-600 text-white hover:bg-transparent border-2 mt-5 border-blue-600 hover:text-blue-600 px-4 py-2 rounded' href="https://dream-paint.web.app/">Live Site</a>
              <a className=' bg-blue-600 text-white hover:bg-transparent border-2 mt-5 border-blue-600 hover:text-blue-600 px-4 py-2 rounded' href="https://github.com/ruhulaminpollob/dream-paint-summer-school">Client Side</a>
              <a className=' bg-blue-600 text-white hover:bg-transparent border-2 mt-5 border-blue-600 hover:text-blue-600 px-4 py-2 rounded' href="https://github.com/ruhulaminpollob/dream-paint-summer-school-server">Server Side</a>
            </div>

            <div className='space-y-3 px-3'>
              <p className='list-item'>Secure User Authentication: Implemented a user authentication system using JWT (JSON Web Tokens) for secure and stateless authentication. Users can create accounts, log in, and access protected routes within the application</p>
              <p className='list-item'>Payment Integration: Integrated a payment system to facilitate secure online transactions. Users can make payments for products or services within the application, ensuring a seamless and convenient payment experience.</p>
              <p className='list-item'>Role-Based Authorization: Developed an authorization system with different user roles, such as admin and user. Admins have access to additional functionalities like managing user accounts and performing administrative tasks, while regular users have limited access.</p>

            </div>
          </div>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="project-description  ">
            <h1 className='text-2xl  md:text-4xl font-bold'>Project-2: Arigatou Toys</h1>
            <div className="project-links space-x-5 mb-5 flex flex-wrap justify-center mt-5 text-center">
              <a className=' bg-blue-600 text-white hover:bg-transparent border-2 mt-5 border-blue-600 hover:text-blue-600 px-4 py-2 rounded' href="https://chicken-chabai-recipi.web.app/">Live Site</a>
              <a className=' bg-blue-600 text-white hover:bg-transparent border-2 mt-5 border-blue-600 hover:text-blue-600 px-4 py-2 rounded' href="https://github.com/ruhulaminpollob/chicken-chabai-recipi-client">Client Side</a>
              <a className=' bg-blue-600 text-white hover:bg-transparent border-2 mt-5 border-blue-600 hover:text-blue-600 px-4 py-2 rounded' href="https://github.com/ruhulaminpollob/chicken-chabai-recipi-server">Server Side</a>
            </div>

            <div className='space-y-3 px-3'>
              <p className='list-item'>Multiple Authentication Methods: Implemented a flexible authentication system that offers email-password and Google login authentication. This allows users to sign up and log in using their email and password or their Google account, providing a seamless and convenient authentication experience.</p>
              <p className='list-item'>Pagination: Incorporated a pagination feature to enhance the browsing experience within the
                marketplace. Users can navigate through a large number of product listings efficiently by accessing
                different pages, improving usability and performance.
              </p>
              <p className='list-item'>Product Management: Developed a comprehensive product management functionality allowing users
                to upload and update their products. Sellers can upload product details such as title, description,
                price, and images, and have the ability to update and modify their product information as needed.
                This feature empowers sellers to maintain control over their product listings and keep them accurate
                and up-to-date.
              </p>

            </div>
          </div>
          <div className='h-96 rounded border-blue-600 border-4  overflow-hidden'>

            <div className="project-screenshot  relative">
              <img className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform hover:-translate-y-3/4" src="https://i.ibb.co/HYWQnFR/project1.png" alt="Project Screenshot" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className='h-96 rounded border-blue-600 border-4  overflow-hidden'>

            <div className="project-screenshot  relative">
              <img className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform hover:-translate-y-3/4" src="https://i.ibb.co/dBFDNG8/project2.png" alt="Project Screenshot" />
            </div>
          </div>
          <div className="project-description  ">
            <h1 className='text-2xl  md:text-4xl font-bold'>Project-1: Dream Paint</h1>
            <div className="project-links flex flex-wrap justify-center space-x-5 mb-5 mt-5 text-center">
              <a className=' bg-blue-600 text-white hover:bg-transparent border-2 mt-5 border-blue-600 hover:text-blue-600 px-4 py-2 rounded' href="https://dream-paint.web.app/">Live Site</a>
              <a className=' bg-blue-600 text-white hover:bg-transparent border-2 mt-5 border-blue-600 hover:text-blue-600 px-4 py-2 rounded' href="https://github.com/ruhulaminpollob/dream-paint-summer-school">Client Side</a>
              <a className=' bg-blue-600 text-white hover:bg-transparent border-2 mt-5 border-blue-600 hover:text-blue-600 px-4 py-2 rounded' href="https://github.com/ruhulaminpollob/dream-paint-summer-school-server">Server Side</a>
            </div>

            <div className='space-y-3 px-3'>
              <p className='list-item'>Multiple Authentication Methods: Implemented a versatile authentication system that includes
                email-password authentication, Google login authentication, and GitHub login authentication. This
                provides users with a variety of options to sign up and log in based on their preferred authentication
                method.</p>
              <p className='list-item'>Private Routes: Implemented secret routes that restrict access to certain pages and functionalities
                only to authenticated users. This ensures that sensitive or personalized information is protected and
                can only be accessed by authorized individuals.</p>
              <p className='list-item'>Bookmark Feature: Developed a bookmark feature that allows users to save and organize their
                favorite blog posts or articles. Users can bookmark specific content for quick and convenient access,
                enhancing their browsing and reading experience within the application</p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
