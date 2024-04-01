import React from 'react';
import '../styles/Contact.css'; 

function Contact() {
  return (
    <section id="contact">
      <h2>ME CONTACTER</h2>
      <p>N'hésitez pas à me contacter via ce formulaire, ou par mail ! 😊</p>
      <form>
        <div>
          <input type="text" id="name" name="name" placeholder="Nom" required />
          <input type="text" id="firstname" name="firstname" placeholder="Prénom" required />
        </div>
        <div>
          <input type="email" id="email" name="email" placeholder="Email" required />
        </div>
        <div>
          <input type="text" id="subject" name="subject" placeholder="Sujet" required />
        </div>
        <div>
          <textarea id="message" name="message" placeholder="Votre message" required></textarea>
        </div>
        <button type="submit">Envoyer mon message</button>
      </form>
    </section>
  );
}

export default Contact;
