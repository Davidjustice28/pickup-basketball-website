import React, {useState,useContext, ContextType, createContext, useEffect} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { HomePage } from './pages/Home-page';
import { ILeague, LeaguesPage } from './pages/Leagues-page';
import { AboutPage } from './pages/About-page';
import { NavBar } from './components/Navbar';
import { JoinPage } from './pages/Join-leaguepage';
import { Dashboard } from './pages/Dashboard';


export const LoggedContext = createContext<any[] | null>(null)
export const LeagueContext = createContext(null)

interface User {
  email:string,
  password:string
  firstName: string
  lastName: string
}

const ADMIN:User = {
  email: "admin@email.com",
  password: "Admintest!",
  firstName: "David",
  lastName: "Justice"
}

let TESTUSER:User = {
  email: "test@email.com",
  password: "Testing!",
  firstName: "Test",
  lastName: "User"
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [users, setUsers] = useState<User[]>([ADMIN,TESTUSER])
  const [currentUser,setCurrentUser] = useState<User>()
  const [currentLeague,setCurrentLeague] = useState<ILeague>()

  function loginUser() {
    let email = document.getElementById("login-email") as HTMLInputElement
    let password = document.getElementById("login-password") as HTMLInputElement
    let hasUser = users.some((user) => {
      return user.email == email.value && user.password == password.value
    })    
    if(hasUser) {
      const loggedUser = users.filter((user) => user.email == email.value && user.password == password.value)[0]
      setCurrentUser(loggedUser)
      setLoggedIn(true)
    }
  
  }

  useEffect(() => {
    console.log(loggedIn)
  },[loggedIn])

  useEffect(() => {
    console.log(currentUser)
  },[currentUser])
  return (
    <div className="App">
      <BrowserRouter>
      <LoggedContext.Provider value={[loggedIn,setLoggedIn]}>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/leagues' element={<LeaguesPage current={currentLeague} pickLeague={setCurrentLeague}/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/leagues/test' element={<JoinPage currentLeague={currentLeague}/>}></Route>
        <Route path='/dashboard' element={<Dashboard users={[users,setUsers]} login={loginUser} user={currentUser} currentuser={[currentUser,setCurrentUser]}/>}></Route>
      </Routes>
      </LoggedContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
