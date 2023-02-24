import { Location,Review,Court,Game } from "../interfaces/leagues";
import { NewUser } from "../interfaces/users";

export class User implements NewUser {
    email
    password
    firstName
    lastName
    static users:number = 0

    constructor(email:string,password:string,firstName:string,lastName:string,) {
        this.email = email
        this.password = password
        this.firstName = firstName
        this.lastName = lastName
    }

}

export class NewLocation implements Location {
    city
    state
    courtType
    players: number
    gameType
    locationLister
    reviews:Review[]

    constructor(city:string,state:string,court:Court,gameType:Game,listerName:string) {
        this.city = city
        this.state = state
        this.courtType = court
        this.players = 0
        this.gameType = gameType
        this.locationLister = listerName
        this.reviews = []
    }

}
