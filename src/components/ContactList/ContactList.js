import styles from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  toDelete,
  getContacts,
  getFilter,
} from '../../redux/mySlice/myPhoneBookSlice';

function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const deleteContact = contactId => {
    dispatch(toDelete(contactId));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul className={styles.contactsList}>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contactItem}>
          &#160;&#160;&#128512;&#160;{name}&#160;-&#160;&#9743; {number}
          <button
            className={styles.btnContact}
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
