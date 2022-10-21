import styles from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { toFilter, getFilter } from '../../redux/mySlice/myPhoneBookSlice';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleNameChange = e => {
    dispatch(toFilter(e.target.value.trim()));
  };

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        name="filter"
        value={filter}
        onChange={handleNameChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
    </label>
  );
}

export default Filter;
