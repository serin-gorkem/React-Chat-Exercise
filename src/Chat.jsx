export default function Chat({ contact, handleTextChange, messages }) {
  return (
    <div className="input-area">
      <textarea
        className="text-area"
        placeholder={"Chat to " + contact.name}
        value={messages[contact.id]}
        onChange={handleTextChange}
      ></textarea>
      <button key={contact.id} className="personName">
        Send to {contact.email}
      </button>
    </div>
  );
}
