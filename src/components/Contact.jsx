import React from 'react';
import { FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { Fade } from 'react-reveal';

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_awc5156', 'template_3cosaru', form.current, '8TvEXhU6Fs_OWGCzp')
      .then((result) => {
        console.log(result.text);
        Swal.fire(
          'Thank You',
          'I just received your message.',
          'success'
        )
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <section id="contact" className="bg-slate-200 py-20">
      <h2 className="text-3xl md:text-6xl underline text-center font-bold mb-4">Contact Me</h2>

      <div className="container mx-auto flex flex-col-reverse justify-center lg:flex-row">
        <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
          {/* <h2 className="text-3xl font-bold mb-4">Contact Me</h2> */}
          <div className="flex flex-col text-center mt-5 ">
            <Fade left>

              <div className='text-center hover:bg-slate-300 p-12 md:p20 rounded shadow-lg mb-10 bg-slate-100 '>
                <MdEmail className='w-8 h-8 mx-auto'></MdEmail>
                <p>ruhulamin.pollob@gmail.com</p>
                <a href='mailto:ruhulamin.pollob@gmail.com' target='_blank'>Send a Message</a>

              </div>
            </Fade>
            <Fade left>
              <div  className='text-center hover:bg-slate-300 p-12 md:p20 rounded shadow-lg mb-10 bg-slate-100 '>
                <FaFacebookMessenger className='w-8 h-8 mx-auto'></FaFacebookMessenger>
                <p>Ruhul Amin</p>
                <a href='https://m.me/rappollob' target='_blank'>Send a Message</a>
              </div>

            </Fade>
            <Fade left>

              <div  className='text-center p-12 md:p20 rounded hover:bg-slate-300 mb-10 shadow-lg bg-slate-100 '>
                <FaWhatsapp className='w-8 h-8 mx-auto'></FaWhatsapp>
                <p>+8801317340938</p>
                <a href='https://api.whatsapp.com/send?phone+8801317340938' target='_blank'>Send a Message</a>
              </div>
            </Fade>
          </div>
        </div>
        <div className="w-full md:mt-20 lg:w-2/3 lg:ml-8">
          <Fade right>

            <form ref={form} onSubmit={sendEmail} className="lg:flex md:space-y-10 lg:flex-wrap">
              <input
                type="text" name='name'
                className="w-full p-4 mb-4 rounded-lg placeholder-gray-500"
                placeholder="Your Full Name"
              />
              <input
                type="email" name='email'
                className="w-full p-4 mb-4 rounded-lg placeholder-gray-500"
                placeholder="Your Email"
              />
              <textarea
                className="w-full p-4 mb-4 rounded-lg placeholder-gray-500"
                placeholder="Your Message"
                name='message'
                rows="4"
              ></textarea>
              <input type='submit' className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold w-full" value="Send Message" />
            </form>
          </Fade>
        </div>
      </div>

    </section>
  );
};

export default Contact;
