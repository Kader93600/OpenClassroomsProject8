import React from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c1c8hgf', 'template_vyhe5ob', e.target, 'QKw4H8W_jQaAMYMnQ')
      .then((result) => {
          console.log(result.text);
          alert('Message envoyé 😊 !');
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
      });
  };

  return (
    <section id="contact">
      <h2>ME CONTACTER</h2>
      <p>N'hésitez pas à me contacter via ce formulaire, ou par mail ! 😊</p>
      <form onSubmit={sendEmail}>
        <div>
          <input type="text" id="name" name="name" placeholder="Nom" required />
          <input type="text" id="firstname" name="firstname" placeholder="Prénom" required />
        </div>
        <div>
          <input type="email" id="email" name="email" placeholder="Email" required />
          <input type="tel" id="phone" name="phone" placeholder="Numéro de téléphone" required /> {/* Ajout du champ téléphone */}
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
