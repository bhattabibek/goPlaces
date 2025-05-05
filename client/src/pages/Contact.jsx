import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e)=>{
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    alert(`Thanks, ${form.name}! We'll get back to you soon.`);
    setForm({ name: '', email: '', message: '' });
  }
  return (
    <>
      <div>Contact Us</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="enter your email"
          value={form.email}
          onChange={handleChange}
        />
        <textarea name="message" value={form.message} onChange={handleChange} />

        <button type="submit">Submit Message</button>
      </form>
    </>
  );
};

export default Contact;
