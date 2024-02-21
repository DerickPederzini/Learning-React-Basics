
import { useState } from 'react';
import Banner from './Componentes/Banner';
import Forms from './Componentes/Forms';
import Groups from './Componentes/Groups';
import Footer from './Componentes/Footer';

function App() {

  const [users, setUsers] = useState([])

  const toNewUserSignedUpUser = (user) => {

    console.log(user)
    setUsers([...users, user])
  }

  const groups = [
    {
      name: 'Software Engineer',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Web Developer',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Professional Artist',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Pharmacist',
      primaryColor: '#E06869',
      secondaryColor: '#FDE7E8'
    }
  ]

  return (
    <div className="App">
      <Banner />
      <Forms jobsName={groups.map(group => group.name)} toSignedUpUser={user => toNewUserSignedUpUser(user)}/>
      {groups.map(group => <Groups 
      key={group.name} 
      name={group.name} 
      primaryColor={group.primaryColor} 
      secondaryColor={group.secondaryColor}  
      users={users.filter(user => user.job === group.name)}
      />)}
      <Footer />

    </div>
  );
}

export default App;
