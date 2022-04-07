function Favorites({
  favoriteContacts = [],
}) {
  return (
    <div>
      <h2>Favorites</h2>
      {favoriteContacts.length === 0 ? (
        <p>No favorite contacts.</p>
      ) : (
        favoriteContacts.filter((c) => c.isFavorite).map((contact, i) => (
          <ul key={i}>
            <li>{contact.name}</li>
          </ul>
        ))
      )}
    </div>
  );
}

export default Favorites;
