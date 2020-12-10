import React from 'react';
import { ContactStyle } from '../styles';

export default function Contact() {
  return (
    <ContactStyle>
      <h1 className="contact__title">Contact Me</h1>
      <p className="contact__subtitle">
        Want me to join your team? Have a new project? Want to say hi? Just drop
        me a line
      </p>
      <form action="" className="contact__form" />
    </ContactStyle>
  );
}
