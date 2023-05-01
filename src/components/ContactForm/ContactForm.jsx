// import React, { Component } from 'react';
import { useState } from 'react';
// import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

// Input form
const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // class ContactForm extends Component {
  //   state = {
  //     name: '',
  //     number: '',
  //   };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  };
  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.props.onSubmit(this.state);
  //   this.clearForm();
  //   console.log(this.state);
  // };
  const handleChange = event => {
    console.log(event.target.value, event.target.name);
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };
  // handleChange = event => {
  //   const { name, value } = event.currentTarget;
  //   this.setState({
  //     [name]: value,
  //     id: nanoid(),
  //   });
  //   console.log(value);
  // };
  // clearForm = () => {
  //   this.setState({
  //     name: '',
  //     number: '',
  //   });
  // };
  // render() {
  // const { name, number } = this.state;
  return (
    <form
      style={{
        maxWidth: '250px',
        fontSize: 30,
      }}
      onSubmit={handleSubmit}
    >
      <label>
        Name
        <input
          style={{
            height: '34px',
            background: '#ccd6e3',
            borderRadius: '6px',
          }}
          type="text"
          onChange={handleChange}
          name="name"
          value={name}
          // pattern for input
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>
        Number
        {/* инпут сo встроенной валидацией для имени контакта. */}
        <input
          style={{
            height: '34px',
            background: '#ccd6e3',
            borderRadius: '6px',
          }}
          type="tel"
          onChange={handleChange}
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button
        style={{
          boxSizing: 'border-box',
          width: '100px',
          height: '34px',
          background: '#808e9e',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '6px',
          marginTop: '20px',
        }}
        type="submit"
      >
        Add contact
      </button>
    </form>
  );
};
// }
ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
export default ContactForm;
