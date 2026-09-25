import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import ContactList from "../components/ContactList/ContactList";
import ContactFrom from "../components/ContactForm/ContactFrom";

export default function Contacts() {
  const [filter, setfilter] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Contacts</h1>
      <input
        type="text"
        placeholder="find filter"
        onChange={(evt) => setfilter(evt.target.value)}
        value={filter}
        style={{ width: 300, margin: "auto" }}
      />
      <ContactFrom />
      <ContactList filter={filter} />
    </>
  );
}
