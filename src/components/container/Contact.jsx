import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setMessage('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMessage('Failed to send message. Please try again.');
        },
      );
  };

  return (
    <div className="section" id="contact">
      <div className="text-center max-w-[600px] mx-auto">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg shadow-md p-8"
        >
          <div className="sm:text-3xl text-2xl font-bold mb-5">Contact Us</div>
          {message && <p className={message.includes('successfully') ? 'text-green-600' : 'text-red-600'}>{message}</p>}
          <form ref={form} onSubmit={sendEmail} className="mt-5">
            <div className="mb-4">
              <label className="block mb-2 text-Teal font-bold">Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                className="sm:p-3 p-2 outline-none text-sm shadow-md w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-Teal font-bold">Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                className="sm:p-3 p-2 outline-none text-sm shadow-md w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-Teal font-bold">Message</label>
              <textarea
                name="message"
                placeholder="Enter your message"
                className="sm:p-3 p-2 outline-none text-sm shadow-md w-full"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-sm text-white bg-Teal p-3 shadow-md font-bold w-full"
            >
              Send
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
