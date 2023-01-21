import React, { ReactNode } from "react";
import { ILeague } from "./Leagues-page";
import "../styles/join-leaguepage.css"

interface Props {
    currentLeague: ILeague | undefined
}

export const JoinPage = ({currentLeague}:Props) => {
    //let {ageGroup,location,days,time,}:any = currentLeague?
    console.log(currentLeague)
    return (
        <div id="individual-league">
            <img src={currentLeague?.imageUrl} alt="league" />
            <h1>{currentLeague?.ageGroup} Group</h1>
            <p>{currentLeague?.city} {currentLeague?.state}</p>
            <p>Days: {currentLeague?.days.join(", ")}</p>
            <p>Timeframe: {currentLeague?.time}</p>
            <p>Court Type: {currentLeague?.courtType}</p>
        </div>
    )
}