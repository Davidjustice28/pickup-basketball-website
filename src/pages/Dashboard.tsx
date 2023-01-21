import React, {useContext} from "react";
import { LoggedContext } from "../App";
import { SignupPage } from "../components/Signup-page";
import { UserHub } from "../components/User-Hub";

export const Dashboard = (props:any) => {
    const [loggedIn,setLoggedIn] = useContext(LoggedContext) as [boolean,Function]
    if(loggedIn == true) {
        return <UserHub statusChange={setLoggedIn} user={props.user}/>
    }else {
        return <SignupPage users ={props.users} login={props.login} currentuser={props.currentuser}/>
    }
}