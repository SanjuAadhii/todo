import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Lists = ({ item, check, deletee }) => {
  return (
    <li className="item" key={item.id}>
      <input type="checkbox" onChange={() => check(item.id)} checked={item.checked} />
      <label style={item.checked ? { textDecoration: "line-through" } : null}>{item.task}</label>
      <FaTrashAlt role='button' onClick={() => deletee(item.id)} tabIndex={0} />
    </li>
  );
};

export default Lists;
