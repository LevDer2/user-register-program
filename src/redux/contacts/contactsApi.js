export const mockFetchContacts = async() => {
    const contacts = JSON.parse(localStorage.getItem("contacts")) || []
    if (contacts.length === 0) {
        const testContacts = [
            {
                id: "1",
                name: "Lev Derevyanchuk",
                number: "+380 226 22 66 "
            },
        ]
        localStorage.setItem("contacts", JSON.stringify(testContacts))
        return testContacts
    }
    return contacts
}

export const mockAddContacts = async(contact) => {
    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    contacts.push(contact)
    localStorage.setItem("contacts", JSON.stringify(contacts))
    return contact
}

export const mockDeleteContact = async (contactId) => {
    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    const updateContacts = contacts.filter(contact => contactId !== contact.id)
    localStorage.setItem("contacts", JSON.stringify(updateContacts));
    return contactId
}