import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "John jill",
        email: "john@example.com",
        phone: "123-456-333",
        type: "personal",
      },
      {
        id: 2,
        name: "Mary jill",
        email: "john@example.com",
        phone: "123-456-333",
        type: "professional",
      },
      {
        id: 3,
        name: "John luke",
        email: "john@example.com",
        phone: "123-456-333",
        type: "personal",
      },
      {
        id: 4,
        name: "Abraham micheal",
        email: "john@example.com",
        phone: "123-456-333",
        type: "professional",
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //ADD_CONTACT,

  const addContact = (contact) => {
    contact.id = uuid;
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  //DELETE_CONTACT,

  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  //SET_CURRENT,

  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // CLEAR_CURRENT,

  const clearCurrent = () => {
    dispatch({ type: SET_CURRENT });
  };
  // UPDATE_CONTACT,
  //FILTER_CONTACTS,
  //CLEAR_FILTER,

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
