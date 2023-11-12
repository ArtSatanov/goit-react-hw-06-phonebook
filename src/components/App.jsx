import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { FilterBar } from './FilterBar/FilterBar';

// const getInitialContacts = () => {
//   const savedContact = localStorage.getItem('contacts');
//   if (savedContact !== null) {
//     return JSON.parse(savedContact);
//   } else {
//     return [];
//   }
// };

export const App = () => {
  // const [contacts, setContacts] = useState(getInitialContacts);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = newContact => {
  //   if (
  //     contacts.find(
  //       option => option.name.toLowerCase() === newContact.name.toLowerCase()
  //     )
  //   ) {
  //     alert(`${newContact.name} is already in contacts`);
  //   } else {
  //     setContacts(prevState => [...prevState, { ...newContact, id: nanoid() }]);
  //   }
  // };

  // const deleteContact = contactId => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== contactId)
  //   );
  // };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <FilterBar />
      <ContactList />
    </div>
  );
};
