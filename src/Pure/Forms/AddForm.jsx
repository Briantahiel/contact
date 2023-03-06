import React, { useRef } from "react";
import { User } from "../../Models/User.class";
import PropTypes from 'prop-types';
import "../../Style/styleForm.css";

const AddForm = ({ add }) => {
  const nameRef = useRef("");
  const lastnameRef = useRef("");
  const emailRef = useRef("");

  function addUser(e) {
    e.preventDefault();
    const newUser = new User(
      nameRef.current.value,
      lastnameRef.current.value,
      emailRef.current.value
    );
    add(newUser);
  }

  return (
    <form onSubmit={addUser}>
      <div className="form-outline flex-fill w-25 p-3">
        <div>
          <input
            ref={nameRef}
            id="inputName"
            type="text"
            className="form-control"
            placeholder="Name"
            required
            autoFocus
          />
          <input
            ref={lastnameRef}
            id="inputLastname"
            type="text"
            className="form-control"
            placeholder="Lastname"
            required
          />
          <input
            ref={emailRef}
            id="inputEmail"
            type="text"
            className="form-control"
            placeholder="Email"
            required
          />
          <button type="submit" className="btn btn-success w-100 p-1">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
AddForm.propTypes = {
    add: PropTypes.func.isRequired
}

export default AddForm;
