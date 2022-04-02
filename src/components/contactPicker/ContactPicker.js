import React from "react";

export const ContactPicker = (props) => {
  const name = props.name;
  const onChange = props.onChange;
  const contacts = props.contacts;

  return (
    <select name={name} onChange={onChange}>
      <option value="" key={-1} selected="selected">
        Appointment With?
      </option>
      {contacts.map(contact =>{
        return(
          <option value={contact.name} key={contact.name}>
          {contact.name}
        </option>)
      })
      }
    </select>
  );
};
