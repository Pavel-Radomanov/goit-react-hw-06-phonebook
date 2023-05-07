// import React from 'react';
// import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter, deleteContact } from '../../redux/slice';

// const ContactList = ({ children }) => {
//   return (
//     <ul
//       style={{
//         padding: '0',
//       }}
//     >
//       {children}
//     </ul>
//   );
// };
const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = findContacts();

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        console.log(name);
        return (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
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
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

// ContactList.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default ContactList;
