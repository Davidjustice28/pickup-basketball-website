import React, {useEffect, useRef,useContext} from "react";
import { LoggedContext } from "../../App";
import "../../styles/signup-page.css"

export const SignupPage = (props:any) => {
    const [loggedIn,setLoggedIn] = useContext(LoggedContext) as [boolean,Function]
    const [users,setUsers] = props.users
    const [currentUser,setCurrentUser] = props.currentuser
    const signupFirstName = useRef<HTMLInputElement>(null)
    const signupLastName = useRef<HTMLInputElement>(null)
    const signupemail = useRef<HTMLInputElement>(null)
    const signuppassword = useRef<HTMLInputElement>(null)

    function addUser(e:any) { 
        let hasUser = users.some((user:any) => {
            return user.email === signupemail.current?.value
        })

        if(!hasUser) {
            let newUser = {
              firstName: signupFirstName.current?.value,
              lastName: signupLastName.current?.value,
              email:signupemail.current?.value,
              password:signuppassword.current?.value
            }
            if(newUser !== undefined) {
                setUsers(users.concat(newUser))
                setCurrentUser(newUser)
                console.log(newUser)
                setLoggedIn(true)
            }
        }
        else {
            console.log("email already in use. try again.")
        }
    }

    useEffect(() => {
      console.log(currentUser)
    },[currentUser])


    return (
        <div id="signup-page">
            <div id="signup-form">
                <label>First Name</label>
                <input id="signup-firstname" type="text" ref={signupFirstName}/>
                <label>Last Name</label>
                <input id="signup-lastname" type="text" ref={signupLastName}/>
                <label>Email</label>
                <input id="signup-email" type="email" ref={signupemail} />
                <label>Password</label>
                <input id="signup-password" type="text" ref={signuppassword}/>
                <button type="button" onClick={addUser}>Sign Up</button>
            </div>
            <form id="login-form">
                <label>Email</label>
                <input id="login-email"type="email" />
                <label>Password</label>
                <input id="login-password" type="text" />
                <button type="button" onClick={() => props.login()}>Login</button>
            </form>
        </div>
    )
}