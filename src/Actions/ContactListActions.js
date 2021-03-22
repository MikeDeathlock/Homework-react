
export const getAllContacts = (contactList) => {
    return {
        type: "CONTACT_LIST_LOADED",
        payload: contactList
    }
}

export const makeNewContact = (contactList) => {
    return {
        type: "ADD_NEW_CONTACT",
        payload: contactList
    }
}

export const deleteOneContact = (contactList) => {
    return {
        type: "DELETE_ONE_CONTACT",
        payload: contactList
    }
}