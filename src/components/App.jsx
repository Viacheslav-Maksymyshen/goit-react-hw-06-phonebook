import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import styles from './App.module.css';

export default function App() {
  const iniContacts = [
    { id: '9jACRmI3_jBfX8jsbptG6', name: 'Viktoria Max', number: '32-32-32' },
    {
      id: 'uwZMuVbdGS70CAwWcdA2y',
      name: 'Viacheslav Max',
      number: '57-31-86',
    },
  ];
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? iniContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const contactsParse = JSON.parse(contacts);

    if (contactsParse) {
      setContacts(contactsParse);
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleNameChange = e => {
    setFilter(e.target.value.trim());
  };

  const repeatName = newName => {
    return contacts.find(
      contact => contact.name.toLowerCase() === newName.toLowerCase()
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId)
    );
  };

  const formSubmitHandler = (name, number) => {
    if (!repeatName(name)) {
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      setContacts(prevState => [contact, ...prevState]);
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2 className={styles.titleContacts}>Contacts</h2>
      <Filter filter={filter} onInputChange={handleNameChange} />
      {visibleContacts.length > 0 && (
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      )}
    </div>
  );
}
