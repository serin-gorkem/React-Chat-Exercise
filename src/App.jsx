import { useState } from "react";
import ContactList from "./ContactList";
import Chat from "./Chat";

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];
export default function App() {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [messages, setMessages] = useState(
    contacts
      .map((contact) => contact.id)
      .reduce(
        (acc, id) => {
          acc[id] = "";
          return acc;
        },
        /* initialValue= */ {}
      )
  );
  console.log(selectedContact.name + " " + messages[selectedContact.id]);
  function handleTextChange(e) {
    setMessages((prevMessages) => ({
      ...prevMessages,
      [selectedContact.id]: e.target.value,
    }));
  }

  function handleButtonClick(contact, event) {
    event.preventDefault();
    setSelectedContact(contact);
  }
  return (
    <div className="container">
      <ContactList handleButtonClick={handleButtonClick} contacts={contacts} />
      <Chat
        contact={selectedContact}
        handleTextChange={handleTextChange}
        message={messages[selectedContact.id]}
      />
    </div>
  );
}