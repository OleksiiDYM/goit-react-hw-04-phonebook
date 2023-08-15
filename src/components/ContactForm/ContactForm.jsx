import { useState } from 'react';
import PropTypes from 'prop-types';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  return (
    <form
      style={{
        maxWidth: '250px',
        fontSize: 30,
      }}
      onSubmit={handleSubmit}
    >
      <label>
        Name
        <input
          style={{
            height: '34px',
            background: '#c0e6f0',
            borderRadius: '6px',
          }}
          type="text"
          onChange={handleChange}
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>
        Number
        <input
          style={{
            height: '34px',
            background: '#c0e6f0',
            borderRadius: '6px',
          }}
          type="tel"
          onChange={handleChange}
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button
        style={{
          boxSizing: 'border-box',
          width: '100px',
          height: '34px',
          background: '#82eefd',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '6px',
          marginTop: '20px',
        }}
        type="submit"
      >
        Add contact
      </button>
    </form>
  );
};
ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
export default ContactForm;
