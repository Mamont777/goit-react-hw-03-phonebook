import PropTypes from 'prop-types';
import { TiUserDeleteOutline } from 'react-icons/ti';
import css from './ContactList.module.css';

function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.contacts}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.contacts__item}>
          <p className={css.contacts__data}>
            <span>
              {name}: {number}
            </span>
            <button
              type="button"
              className={css.btnDel}
              onClick={() => onDelete(id)}
            >
              Delete
              <TiUserDeleteOutline size="16" className={css.icon} />
            </button>
          </p>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func.isRequired,
};
ContactList.defaultProps = {
  contacts: [],
};

export default ContactList;
