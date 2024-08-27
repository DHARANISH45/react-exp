import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <p>If you have any questions or would like to get in touch, feel free to reach out to us.</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
