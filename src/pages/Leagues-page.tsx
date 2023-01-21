import React, { createContext, MouseEventHandler, useState } from "react";
import { FC } from "react";
import oldHeadImg from "../images/oldhead.jpg"
import youngAdultImg from "../images/young-adult.jpg"
import midAgeImg from "../images/mid-age.jpg"

import "../styles/leagues-page.css"
import { Link } from "react-router-dom";

enum AgeGroups {
    Senior = "Senior 55+",
    YoungAdult = "Young Adults",
    MidAge = "Mid Age",
    HighSchool = "High School",
    All = "All Ages"
}

type CourtType = 'outdoor' | 'indoor'

export interface ILeague {
    ageGroup:AgeGroups
    courtType:CourtType
    city: string
    state: string
    imageUrl: string
    days: string[]
    time: string
    teamSize: Number
    notes: string
    players?: any[]
}

class League {
    readonly ageGroup:AgeGroups
    readonly courtType:CourtType
    readonly city:string
    readonly state:string
    readonly teamSize: Number
    readonly imageUrl: string
    readonly days:string[]
    readonly time:string
    readonly players:any[]
    readonly notes: string

    constructor({ageGroup,courtType,city,state,teamSize,imageUrl,days,time,players=[],notes}: ILeague) {
        this.ageGroup = ageGroup
        this.courtType = courtType
        this.city = city
        this.state = state
        this.imageUrl = imageUrl
        this.days = days
        this.time = time
        this.teamSize = teamSize
        this.players = players
        this.notes = notes
    }
}

const League1 = new League({ageGroup:AgeGroups.YoungAdult,courtType:'outdoor',city:"Cherry Hill",state:"New Jersey",teamSize:5,imageUrl:midAgeImg,days:['mondays','fridays'],time:'2pm-4pm',notes:"NA"})
const League2 = new League({ageGroup:AgeGroups.MidAge,courtType:'indoor',city:"Mount Laurel",state:"New Jersey", teamSize:3, imageUrl:youngAdultImg, days:['sundays'],time:'1pm-2:30pm',notes:"NA"})
const League3 = new League({ageGroup:AgeGroups.Senior,courtType:"indoor",city:"Southampton",state:"New Jersey", teamSize:5, imageUrl:oldHeadImg, days:['saturday','tuesdays','thursdays'],time:'6am-8am',notes:"NA"})

interface Props{
    pickLeague: (league:{}) => void
    league: {}
}

export const LeaguesPage = (props:any) => {
    const [leagues,setLeagues] = useState<ILeague[]>([League1,League2,League3])
    return (
        <div id="leagues-container">
            <h1>Current Leagues</h1>
            <div id="leagues-grid">
                {leagues.map((league,index) => {
                    return (

                        <div  className="league-div" key={`L${index}`} onClick={() => props.pickLeague(league)}>
                            <Link to="test">
                            <img src={league.imageUrl} alt="bball game"></img>
                            <p className="league-header">{league.teamSize+" VS "+league.teamSize} - {league.city+" "+ league.state}</p>
                            </Link>
                        </div>
                    
                    )
                })}
            </div>
        </div>
    )
}