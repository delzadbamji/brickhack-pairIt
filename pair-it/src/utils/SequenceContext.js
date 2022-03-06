import React from "react";

const SequenceContext = React.createContext();

export const UserProvider = SequenceContext.Provider;
export const UserConsumer = SequenceContext.Consumer;

export default SequenceContext;
