export default function Chat({ contact, handleTextChange, message }) {
  return (
    <div className="input-area">
      <textarea
        className="text-area"
        placeholder={"Chat to " + contact.name}
        value={message}
        onChange={handleTextChange}
      ></textarea>
      <button key={contact.id} className="personName">
        Send to {contact.email}
      </button>
    </div>
  );
}