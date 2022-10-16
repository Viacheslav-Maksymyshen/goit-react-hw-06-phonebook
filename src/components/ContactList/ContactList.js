import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={styles.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contactItem}>
          &#160;&#160;&#128512;&#160;{name}&#160;-&#160;&#9743; {number}
          <button
            className={styles.btnContact}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
