import React, {useState,useRef, MutableRefObject} from "react";
import {Location} from "../../interfaces/leagues"
import { NewLocation } from "../../utilities/classes";
import "../../styles/leagues-page.css"

const location1 = new NewLocation("Cherry Hill", "New Jersey","outdoor","full court","David Justice")
const location2 = new NewLocation("Wilmington", "Delaware", "outdoor", "half court","David Justice")
const location3 = new NewLocation("Anchorage", "Alaska", "indoor", "full court", "David Justice")

export const LeaguesPage = (props:any) => {
    const [locations, setLocations] = useState<Location[]>([location1,location2,location3])
    const [filteredResults,setFilteredResults] = useState<Location[]>([])
    const SearchBarRef = useRef() as MutableRefObject<HTMLInputElement>

    function changeLocationResults() {
        if(SearchBarRef.current.value === "") {
            setFilteredResults(locations)
        }else {
            let query = SearchBarRef.current.value
            setFilteredResults(locations.filter(l => {
                return ((l.city === query) || (l.state === query) || (l.courtType === query) || (l.gameType === query))
            }))
        }
    }
    return (
        <div id="leagues-container">
            <div id="search-div" style={{display:"flex", alignItems:"center"}}>
                <input type="text" placeholder="search by city, state, court, or game type " ref={SearchBarRef} id="searchbar"/>
                <button type="button" onClick={changeLocationResults}>Search</button>
            </div>
            <table>
                <tr>
                    <th>Court</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Game</th>
                    <th>Players</th>
                    <th>Reviews</th>
                    <th>Lister</th>
                </tr>
                {filteredResults.map(l => {
                    return (
                        <tr>
                            <td>{l.courtType}</td>
                            <td>{l.city}</td>
                            <td>{l.state}</td>
                            <td>{l.gameType}</td>
                            <td>{l.players}</td>
                            <td>{l.reviews.length}</td>
                            <td>{l.locationLister}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}