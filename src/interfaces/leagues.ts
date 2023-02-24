type Court = "outdoor" | "indoor"
type Game = "half court" | "full court"

interface Review {
    message: string
    postDate: Date
    creator: string
}

interface Location {
    city: string
    state: string
    courtType: Court
    players: number
    gameType: Game
    locationLister:string
    reviews: Review[]
}

export type {Location,Review,Court,Game}