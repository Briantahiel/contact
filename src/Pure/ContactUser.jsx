import React from "react";
import PropTypes from "prop-types";
import { User } from "./../Models/User.class.js";

const ContactUser = ({ user, remove, connected}) => {

  function isConnected(){
    if(user.connected){
      return(<i onClick={() => connected(user)} className='bi-toggle-on p-2' style={{color:'green'}}></i>)
    }
    else{
      return(<i onClick={() => connected(user)} className='bi-toggle-off p-2' style={{color:'grey'}}></i>)
    }
  }
  return (
    <tr>
      <th>{user.name}</th>
      <td>{user.lastname}</td>
      <td>{user.email}</td>
      <td>{isConnected()}</td>
      <i
        className="bi-trash"
        style={{ color: "tomato", cursor: "pointer" }}
        onClick={() => remove(user)}
      ></i>
    </tr>
  );
};

ContactUser.propTypes = {
  user: PropTypes.instanceOf(User).isRequired,
};

export default ContactUser;
