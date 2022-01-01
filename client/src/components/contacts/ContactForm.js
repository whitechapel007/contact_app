import React, { useState, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact,current } = contactContext;
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const { name, email, phone, type } = contact;

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addContact(contact);
    setContact({ name: "", email: "", phone: "", type: "personal" });
  };
  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">Add Contacts</h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <h5>Contact information</h5>
      <input type="radio" name="type" value="personal" onChange={onChange} />
      {""}
      Personal
      <input
        type="radio"
        name="type"
        value="professional"
        onChange={onChange}
        style={{ marginLeft: "10px" }}
      />
      {""}
      Professional
      <div>
        <input
          type="submit"
          value="Add Contact"
          class="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default ContactForm;
