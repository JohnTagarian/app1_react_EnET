import React from "react";
import {userContext} from './context';
export default function ContextContent2(){
    let [user,setUser] = React.useContext(userContext);
    const contentStyle = {
        backgroundColor: '#ddd',
        textAlign: 'center',
        margin: 10,
        padding: 10,
    }

    const onClickSignIn = (event) => {
        event.preventDefault();
        setUser('Tom Jery');
    }
    return(
        <div style={contentStyle}>
            {
                (user)
                ? <h2>Hello {user}</h2>
                : <h2>Please <a href="" onClick={onClickSignIn}>Sign In</a></h2>
            }
        </div>
    )


}