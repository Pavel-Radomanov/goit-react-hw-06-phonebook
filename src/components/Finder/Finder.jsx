// import React from 'react';
// import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilter } from '../../redux/slice';

const Finder = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
      }}
    >
      <label>Find contact by name</label>
      <input
        style={{
          height: '34px',
          background: '#ccd6e3',
          borderRadius: '6px',
          marginLeft: '10px',
        }}
        type="text"
        value={filter}
        onChange={onChange}
      ></input>
    </div>
  );
};
// Finder.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
export default Finder;

//   return (
//     <label>
//       <input
//         type="text"
//         name="filter"
//         value={filter}
//         onChange={onChange}
//         placeholder="Find contacts by name"
//       />
//     </label>
//   );
