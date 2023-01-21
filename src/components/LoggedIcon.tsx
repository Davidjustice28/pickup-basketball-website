import React,{useContext} from "react";
import { LoggedContext } from "../App";

export const LoggedIcon = (props:any) => {
    const [loggedIn,setLoggedIn] = useContext(LoggedContext) as any[]

    if(loggedIn) {
        return (
            <li className="status-button" >Profile{props.children}</li>
        )
        }
    else {
        return (
            <li>Sign In</li>
        )
    }
    
}