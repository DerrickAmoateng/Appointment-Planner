import React from "react";


export const ContactForm = ({
  name,
  setName,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        placeholder="Contact Name"
      />
      <br />
      <input
        type="tel"
        name="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
        // regex is for Ghana phone numbers
        pattern="^(0|233)(2|5)\d{1}-\d{3}-\d{4}$"
        placeholder="Contact Phone ( 0##-###-#### ) or ( 233##-###-#### )"
      />
      <br />
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Contact Email"
      />
      <br />
      <input type='submit'/>
    </form>  
  );
};
