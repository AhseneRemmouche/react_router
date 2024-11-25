import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form action="/">
        <input type="text" placeholder="First Name" />
        <br />
        <input type="text" placeholder="Last Name" />
        <br />
        <input type="email" placeholder="Email" />
        <br />
        <textarea placeholder="Comments"></textarea>
        <br />
        <button>Send Form</button>
      </form>
    </div>
  );
};

export default ContactForm;
