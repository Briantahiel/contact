import React  from 'react';
import PropTypes from 'prop-types';
import { User } from './../Models/User.class.js';

const ContactUser = ({ user, remove }) => {
  return (
    <tr>
        <th>{user.name}</th>
        <td>{user.lastname}</td>
        <td>{user.email}</td>
        <i className='bi-trash' style={{color:'tomato', cursor: 'pointer'}} onClick={() => remove(user)}></i>
    </tr>
  )
}

ContactUser.propTypes = {
    user: PropTypes.instanceOf(User).isRequired
}

export default ContactUser
