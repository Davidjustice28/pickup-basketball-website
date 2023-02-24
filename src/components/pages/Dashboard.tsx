import React, {useContext} from "react";
import { LoggedContext } from "../../App";
import { SignupPage } from "./Signup-page";
import { UserHub } from "./User-Hub";

export const Dashboard = (props:any) => {
    const [loggedIn,setLoggedIn] = useContext(LoggedContext) as [boolean,Function]
    if(loggedIn) {
        return <UserHub statusChange={setLoggedIn} user={props.user}/>
    }else {
        return <SignupPage users ={props.users} login={props.login} currentuser={props.currentuser}/>
    }
}