import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  return <ul>
    {contacts.map(contact => {
        return <li key={contact.id}>
            {contact.name}: {contact.number}
        </li>
    })}
  </ul>;
}
