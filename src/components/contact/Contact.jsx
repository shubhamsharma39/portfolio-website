import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_f7pve37", // ✅ Your EmailJS Service ID
      "template_swuninq", // ✅ Your EmailJS Template ID
      form.current,
      "ZmocaXzFAgEGkwlFH" // ✅ Your EmailJS Public Key
    ).then(
      (result) => {
        console.log("Message Sent");
        alert("Message sent successfully!");
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message.");
      }
    );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>shubhamss21428@gmail.com</h5>
            <a href="mailto:shubhamss21428@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <FaLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Shubham Sharma</h5>
            <a href="https://www.linkedin.com/in/shubham-sharma-352576259" target="_blank" rel="noreferrer">Visit Profile</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
