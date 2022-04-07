import { useState } from 'react';

function ContactInput({ addContact }) {
  const [value, setValue] = useState('');

  const handleAddContact = () => {
    if (!value) return;

    addContact(value);
    setValue('');
  };

  return (
    <div>
        <input
          placeholder="Enter contact name"
          style={{ padding: '8px 16px' }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          style={{ padding: '8px 16px', marginLeft: 8 }}
          onClick={handleAddContact}
        >
          Add
        </button>
      </div>
  );
}

export default ContactInput;
