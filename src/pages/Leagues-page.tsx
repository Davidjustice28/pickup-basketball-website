import React, { useState } from "react";
import { FC } from "react";
import oldHeadImg from "../images/oldhead.jpg"
import youngAdultImg from "../images/young-adult.jpg"
import midAgeImg from "../images/mid-age.jpg"

import "../styles/leagues-page.css"

enum AgeGroups {
    Senior = "Senior 55+",
    YoungAdult = "Young Adults",
    MidAge = "Mid Age"
}

type CourtType = 'outdoor' | 'indoor'
type Season = 'Winter' | "Spring" | "Summer" | "Fall"
interface ILeague {
    ageGroup:AgeGroups,
    courtType:CourtType,
    location:string
    season:Season
    imageUrl: string
}

class League {
    readonly ageGroup:AgeGroups
    readonly courtType:CourtType
    readonly location:string
    readonly season:Season
    readonly imageUrl: string

    constructor({ageGroup,courtType,location,season,imageUrl}: ILeague) {
        this.ageGroup = ageGroup
        this.courtType = courtType
        this.location = location
        this.season = season
        this.imageUrl = imageUrl
    }
}

const League1 = new League({ageGroup:AgeGroups.YoungAdult,courtType:'outdoor',location:"Cherry Hill, NJ",season: "Spring",imageUrl:midAgeImg})
const League2 = new League({ageGroup:AgeGroups.MidAge,courtType:'indoor',location:"Mount Laurel, NJ", season: "Winter", imageUrl:youngAdultImg})
const League3 = new League({ageGroup:AgeGroups.Senior,courtType:"indoor",location:"Southampton, NJ", season:"Summer", imageUrl:oldHeadImg})

export const LeaguesPage: FC = () => {
    const [leagues,setLeagues] = useState<ILeague[]>([League1,League2,League3])
    return (
        <div id="leagues-container">
            <h1>Current Leagues</h1>
            <div id="leagues-grid">
                {leagues.map((leage,index) => {
                    return (
                        <div  className="league-div" key={`L${index}`}>
                            <img src={leage.imageUrl}></img>
                            <p className="league-header">{leage.season} '{new Date().getFullYear()} - {leage.ageGroup} League</p>
                            <p className="league-description">{leage.location}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}