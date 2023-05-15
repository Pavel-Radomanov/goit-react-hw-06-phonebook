import { useState } from 'react';

// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, addContact } from '../../redux/slice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   onSubmit(name, number);
  //   setName('');
  //   setNumber('');
  // };
  const handleSubmit = event => {
    event.preventDefault();
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const enterContacts = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
      // (contact.name.toLowerCase() === name.toLowerCase() && contact.number === number) ||
      // contact.number === number
    );
    enterContacts
      ? alert(`${name}  is already exists`)
      : dispatch(addContact(contact));

    setName('');
    setNumber('');
  };

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
// ContactForm.propTypes = {
//   name: PropTypes.string,
//   number: PropTypes.string,
// };
export default ContactForm;

// export const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const contacts = useSelector(getContacts);
//   const dispatch = useDispatch();

//   const handleChange = event => {
//     // console.log(event.target.value, event.target.name);
//     const { name, value } = event.target;
//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'number':
//         setNumber(value);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     const enterContacts = contacts.some(
//       contact =>
//         (contact.name === name.toLowerCase() && contact.number === number) ||
//         contact.number === number
//     );
//     enterContacts
//       ? alert(`${name} or ${number} is already in contacts`)
//       : dispatch(addContact(contact));

//     setName('');
//     setNumber('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         value={name}
//         onChange={handleChange}
//         placeholder="Name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//       />
//       <input
//         type="tel"
//         name="number"
//         value={number}
//         onChange={handleChange}
//         placeholder="number"
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         required
//       />
//       <button type="submit">Add contact</button>
//     </form>
//   );
// };
