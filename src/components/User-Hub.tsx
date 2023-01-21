import React from "react";

export const UserHub = (props:any) => {
    console.log(props.user)
    return (
        <div>
            User Dashboard because logged in
            <button onClick={() => props.statusChange(false)}>Log Out</button>
        </div>
    )
}