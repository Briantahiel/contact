import React, { useState } from "react";
import { User } from "../Models/User.class";
import ContactUser from "../Pure/ContactUser";
import AddForm from "../Pure/Forms/AddForm";

const ContactFunctions = () => {
  const defaultContact1 = new User("Brian", "Gómez", "email@email.com");
  const defaultContact2 = new User("John", "Doe", "email2@email.com");
  const [user1, setUser1] = useState(defaultContact1);
  const [user2, setUser2] = useState(defaultContact2);

  const userAll = [user1, user2];
  const [users, setUsers] = useState(userAll);

  function deleteUser(user) {
    const index = users.indexOf(user);
    const allUsers = [...users];
    allUsers.splice(index, 1);
    setUsers(allUsers);
  }

  function addUser(user) {
    const allUsers = [...users];
    allUsers.push(user);
    setUsers(allUsers);
  }
  function connectUser(user){
    const index = users.indexOf(user);
    const allUsers = [...users];
    allUsers[index].connected = !allUsers[index].connected;
    setUsers(allUsers);
  }
  return (
    <>
      <div className="p-3">
        <table>
          <thead>
            <tr>
              <th className="p-1">Name</th>
              <th className="p-1">Lastname</th>
              <th className="p-1">Email</th>
              <th className="p-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <ContactUser key={index} user={user} remove={deleteUser} connected={connectUser}/>
              );
            })}
          </tbody>
        </table>
      </div>
      <AddForm add={addUser} />
    </>
  );
};

export default ContactFunctions;
