// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
// import ContactItem from './ContactItem/ContactItem';
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
  return (
    <section style={mainStyle}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Finder />
      <ContactList />
    </section>
  );
};
export default App;

// const App = () => {
//   const [filter, setFilter] = useState('');

//   const [contacts, setContacts] = useState(
//     JSON.parse(localStorage.getItem('contacts')) ?? []
//   );

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const addContact = (name, number) => {
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     const enterContacts = contacts.some(
//       i =>
//         (i.name === contact.name.toLowerCase() &&
//           i.number === contact.number) ||
//         i.number === contact.number
//     );
//     enterContacts
//       ? alert(`${name} or ${number} is already in contacts`)
//       : setContacts([contact, ...contacts]);
//   };

//   const getListContacts = () => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   const changeFilter = event => {
//     setFilter(event.target.value);
//   };

//   const deleteContact = id => {
//     setContacts(contacts.filter(contact => contact.id !== id));
//     setFilter('');
//   };

//   const visibleContact = getListContacts();

//   return (
//     <div style={mainStyle}>
//       <h2>Phonebook</h2>
//       <ContactForm onSubmit={addContact} />
//       <h3>Contacts</h3>
//       <Finder filter={filter} onChange={changeFilter} />
//       <ContactList>
//         <ContactItem
//           contacts={visibleContact}
//           deleteContactOn={deleteContact}
//         />
//       </ContactList>
//     </div>
//   );
// };

// export default App;
