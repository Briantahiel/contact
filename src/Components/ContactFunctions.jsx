import React, { useState } from 'react'
import { User } from '../Models/User.class'
import ContactUser from '../Pure/ContactUser';

const ContactFunctions = () => {

    const defaultContact1 = new User("Brian", "Gómez", "email@email1.com");
    const defaultContact2 = new User("Brian 1", "Gómez 1", "email@email2.com");
    const [user1, setUser1] = useState(defaultContact1);
    const [user2, setUser2] = useState(defaultContact2);

    const userAll = [user1, user2]
    const [users, setUsers] = useState(userAll);

    function deleteUser(user){
        const index = users.indexOf(user);
        const allUsers = [...users];
        // The index of the element we want to delete and how many of them (1)
        allUsers.splice(index,1);
        setUsers(allUsers);
    }
  return (
    <div>
     <table>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Lastname</th>
            <th scope='col'>Email</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
            { users.map((user, index) => {
              return(
                <ContactUser 
                key={index}
                user={user}
                remove={deleteUser}
                />
              )
              }
              )}
        </tbody>
        </table>
    </div>
  )
}

export default ContactFunctions