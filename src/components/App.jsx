// import { Component } from 'react';
import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactItem from './ContactItem/ContactItem';
import Finder from './Finder/Finder';

const mainStyle = {
  // height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'left',
  fontSize: 20,
  color: '#3d2f26ed',
  marginLeft: '30px',
};
const App = () => {
  // state = {
  //   contacts: [],
  //   filter: '',
  //   name: '',
  //   number: '',
  // };
  const [filter, setFilter] = useState('');

  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  // componentDidMount() {
  //   const contacts = localStorage.getItem('contactsLocal');
  //   const parsedContactsLocal = JSON.parse(contacts);
  //   if (parsedContactsLocal) {
  //     this.setState({ contacts: parsedContactsLocal });
  //   }
  // }
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem(
  //       'contactsLocal',
  //       JSON.stringify(this.state.contacts)
  //     );
  //   }
  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const enterContacts = contacts.some(
      i =>
        (i.name === contact.name.toLowerCase() &&
          i.number === contact.number) ||
        i.number === contact.number
    );
    enterContacts
      ? alert(`${name} or ${number} is already in contacts`)
      : setContacts([contact, ...contacts]);
  };
  // addContact = data => {
  //   const { contacts } = this.state;
  //   contacts.find(
  //     contact => contact.name.toLowerCase() === data.name.toLowerCase()
  //   )
  //     ? alert(`${data.name} is already in contacts`)
  //     : this.setState(prevState => ({
  //         contacts: [data, ...prevState.contacts],
  //       }));
  //   console.log(contacts);
  // };
  const getListContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  // getListContacts = () => {
  //   const { contacts, filter } = this.state;
  //   const normalizeFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizeFilter)
  //   );
  // };
  const changeFilter = event => {
    setFilter(event.target.value);
  };
  // changeFilter = event => {
  //   this.setState({ filter: event.currentTarget.value });
  // };
  // +++++++++++++
  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
    setFilter('');
  };
  // deleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };

  // render() {
  // const { filter } = this.state;
  const visibleContact = getListContacts();

  return (
    <div style={mainStyle}>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={addContact} />
      <h3>Contacts</h3>
      <Finder filter={filter} onChange={changeFilter} />
      <ContactList>
        <ContactItem
          contacts={visibleContact}
          deleteContactOn={deleteContact}
        />
      </ContactList>
    </div>
  );
};

// }

export default App;

// { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },

// formSubmit = ({ name, number }) => {
//   const contact = {
//     // id: nanoid(),
//     name,
//     number,
//   };
//   this.state.contacts.some(
//     i =>
//       (i.name.toLowerCase() === contact.name.toLowerCase() &&
//         i.number === contact.number) ||
//       i.number === contact.number
//   )
//     ? alert(`${name} is already in contacts`)
//     : this.setState(({ contacts }) => ({
//         contacts: [contact, ...contacts],
//       }));
// };
