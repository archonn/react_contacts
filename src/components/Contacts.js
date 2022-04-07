function Contacts({
  contacts = [],
  deleteContact,
  toggleFavorite
}) {
  return (
    <div>
      <h2>All Contacts</h2>
      {contacts.length === 0 ? (
        <p>No contacts.</p>
      ) : (
        contacts.map((contact, i) => (
          <p key={i}>
            <input
              type="checkbox"
              style={{ marginRight: 8 }}
              checked={contact.isFavorite}
              onChange={(e) => toggleFavorite(e, i)}
            />
            {contact.name}
            <button style={{ marginLeft: 8 }} onClick={() => deleteContact(i)}>Delete</button>
          </p>
        ))
      )}
    </div>
  );
}

export default Contacts;
