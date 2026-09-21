import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import ContactList from "../components/ContactList/ContactList";
import ContactFrom from "../components/ContactForm/ContactFrom";

export default function Contacts() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  
  return (
    <>
    <h1>Contacts</h1>
    <ContactFrom/>
    <ContactList/>
    </>
  );
}
