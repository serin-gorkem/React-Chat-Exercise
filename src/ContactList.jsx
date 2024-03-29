export default function ContactList({ handleButtonClick, contacts }) {
  return (
    <div className="contact-buttons">
      {contacts.map((contact) => (
        <button
          key={contact.id}
          className="personName"
          onClick={(event) => {
            handleButtonClick(contact, event);
          }}
        >
          {contact.name}
        </button>
      ))}
    </div>
  );
}