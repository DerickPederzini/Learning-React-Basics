
import { useState } from 'react';
import Banner from './Componentes/Banner';
import Forms from './Componentes/Forms';

function App() {

  const [users, setUsers] = useState('')

  const toNewUserSignedUpUser = (user) => {

    console.log(user)
    setUsers([...users, user])
  }

  return (
    <div className="App">
      <Banner />
      <Forms toSignedUpUser={user => toNewUserSignedUpUser(user)}/>
    </div>
  );
}

export default App;
