import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import styles from './App.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { toAdd, toDelete, toFilter } from '../redux/mySlice/myPhoneBookSlice';

export default function App() {
  const dispatch = useDispatch();
  const getContacts = state => state.items.contacts;
  const getFilter = state => state.items.filter;

  const contacts = useSelector(getContacts);
  console.log('🚀 ~ file: App.jsx ~ line 17 ~ App ~ contacts', contacts);

  const filter = useSelector(getFilter);

  // useEffect(() => {
  //   const contacts = localStorage.getItem('contacts');
  //   const contactsParse = JSON.parse(contacts);

  //   if (contactsParse) {
  //     dispatch(getContacts(contactsParse));
  //   } else {
  //     return;
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleNameChange = e => {
    dispatch(toFilter(e.target.value.trim()));
  };

  const repeatName = newName => {
    return contacts.find(
      contact => contact.name.toLowerCase() === newName.toLowerCase()
    );
  };

  const deleteContact = contactId => {
    dispatch(toDelete(contactId));
  };

  const formSubmitHandler = (name, number) => {
    if (!repeatName(name)) {
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      dispatch(toAdd(contact));
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
