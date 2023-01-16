import React, { createContext, useReducer, useState } from "react";
import InitialState from "./initialStates/index.state";
import reducer from "./reducers/index.reducer";

export const GlobalContext = createContext({});

const {
  advertReducer,
  authReducer,
  orderReducer,
  paymentReducer,
  postReducer,
  profileReducer,
  eventReducer,
  groupReducer,
  relationReducer,
  relationshipReducer,
  userReducer,
} = reducer;

const {
  authInitial,
  advertInitial,
  orderInitial,
  paymentInitial,
  profileInitial,
  eventInitial,
  groupInitial,
  postInitial,
  relationInitial,
  relationshipInitial,
  userInitial,
} = InitialState;

const GlobalProvider = ({ children }) => {
  const [isEditFormOpen, setIsEditFormOpen] = useState(0);
  const [authState, authDispatch] = useReducer(authReducer, authInitial);
  const [advertState, advertDispatch] = useReducer(
    advertReducer,
    advertInitial
  );
  const [eventState, eventDispatch] = useReducer(eventReducer, eventInitial);
  const [groupState, groupDispatch] = useReducer(groupReducer, groupInitial);
  const [postState, postDispatch] = useReducer(postReducer, postInitial);
  const [relationState, relationDispatch] = useReducer(
    relationReducer,
    relationInitial
  );

  const [relationshipState, relationshipDispatch] = useReducer(
    relationshipReducer,
    relationshipInitial
  );

  const [orderState, orderDispatch] = useReducer(orderReducer, orderInitial);
  const [paymentState, paymentDispatch] = useReducer(
    paymentReducer,
    paymentInitial
  );
  const [profileState, profileDispatch] = useReducer(
    profileReducer,
    profileInitial
  );

  const [userState, userDispatch] = useReducer(userReducer, userInitial);

  return (
    <GlobalContext.Provider
      value={{
        authState,
        advertState,
        postState,
        eventState,
        groupState,
        relationState,
        relationshipState,
        orderState,
        paymentState,
        profileState,
        userState,
        isEditFormOpen,
        authDispatch,
        advertDispatch,
        postDispatch,
        eventDispatch,
        groupDispatch,
        relationDispatch,
        relationshipDispatch,
        orderDispatch,
        paymentDispatch,
        profileDispatch,
        userDispatch,
        setIsEditFormOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
