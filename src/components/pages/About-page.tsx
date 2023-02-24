import React from "react";
import { FC } from "react";
import "../../styles/about-page.css"

export const AboutPage: FC = () => {
    return (
        <div id="about-container">
            <div id ="about-mask"></div>
            <div id="about-text">
                <h1>Tired of Running 3 vs 3 Pickup Games?</h1>
                <p>Bball solves every hoopers biggest issue? Finding consist and competitives runs. No more park hopping and calling around
                    to figure out where and when good people play ball. Join one park leagues to join a group of 10-12 guys who play pick up at the same location
                    weekly. 
                </p>
                <p>We are no ordinary league, because we aren't a league. You sign up to join a group of other individuals in your area that agrees to ball at the
                    same spot each week at a certain spot. Each group is fixed amount so your guranteed to play and know who your hooping with. However, because 
                    there's no formalized teams, you can play ordinary pick up basketball. Switch up the teams, play half or full court, or however you want. Your
                    group sets the rules and enjoys consistent ball games.
                </p>
            </div>
        </div>
    )
}