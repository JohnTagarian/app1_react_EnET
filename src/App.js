import React from "react";
import { userContext } from "./context";
import ContextHeader2 from './context-header2';
import ContextContent2 from './context-content2';

export default function App(){
  let [user,setUser] = React.useState('');
  return (
    <userContext.Provider value={[user,setUser]}>
      <ContextHeader2 />
      <ContextContent2 />
    </userContext.Provider>
  )
}