import React from "react";
import ContactForm from "./contactForm";
import Card from "../../UI/card";
import Header from "../../UI/header";

const Contact = () => {
  return (
    <section>
      <Card>
        <Header />
        <ContactForm />
      </Card>
    </section>
  );
};

export default Contact;
