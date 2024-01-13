import { useState } from 'react'
import ContactList from './ContactList';
import './App.css'
import Chat from './Chat';

export default function App() {

  const [selectedContact, setSelectedContact] = useState(() => contacts[0]);
  const [messages, setMessages] = useState({
      0:"",
      1:"",
      2:"",
  })
  console.log(selectedContact.name + " "+ messages[selectedContact.id]);
  function handleTextChange(e){
      setMessages({
          ...messages,
          [selectedContact.id]: e.target.value
      })
  }

  function handleButtonClick(contact , event){
    event.preventDefault();
    setSelectedContact(contact);
  }
  return (
    <div className='container'>
      <ContactList handleButtonClick={handleButtonClick} contacts={contacts}  />
      <Chat contact={selectedContact} handleTextChange={handleTextChange} messages={messages}/>
    </div>
  )
}
  

const contacts = [
    {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
    {id: 1, name: 'Alice', email: 'alice@mail.com'},
    {id: 2, name: 'Bob', email: 'bob@mail.com'},
  ];