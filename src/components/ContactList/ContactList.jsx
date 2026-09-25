import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export default function ContactList({ filter }) {
  const contacts = useSelector((state) => state.contacts.items);
  const isLoading = useSelector((state) => state.contacts.isLoading)
const error  = useSelector((state)=>state.contacts.error)  

  const dispatch = useDispatch();


  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  };


  const filteredContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  if (isLoading) {
    return <p>loading contacts</p>
  }
  if (error) {
    return <p>{error }</p>
  }
  if (filteredContact.length === 0 ) {
    return <p>no contacts</p>
  }

  return (
    <ul>
      {filteredContact.map((contact) => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button type="button" onClick={() => handleDelete(contact.id)}>
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
