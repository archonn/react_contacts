import { useState } from 'react';
import ContactInput from './components/ContactInput';
import Contacts from './components/Contacts';
import Favorites from './components/Favorites';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (value) => {
    setContacts([...contacts, { name: value, isFavorite: false }]);
  };

  const toggleFavorite = (e, i) => {
    const newContacts = [...contacts];
    newContacts[i] = { ...newContacts[i], isFavorite: e.target.checked };
    setContacts(newContacts);
  };

  const deleteContact = (idx) => {
    const filteredContacts = contacts.filter((c, i) => idx !== i);
    setContacts(filteredContacts);
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
      <h1>Contacts List</h1>
      <ContactInput addContact={addContact} />

      <div style={{ display: 'flex' }}>
        <Contacts contacts={contacts} deleteContact={deleteContact} toggleFavorite={toggleFavorite} />
        <div style={{ margin: 64 }} />
        <Favorites favoriteContacts={contacts.filter((c) => c.isFavorite)} />
      </div>
    </div>
  );
}

export default App;
