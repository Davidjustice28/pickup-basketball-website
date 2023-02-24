import React, {useState, createContext, useEffect} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { HomePage } from './components/pages/Home-page';
import { AboutPage } from './components/pages/About-page';
import { NavBar } from './components/Navbar';
import { Dashboard } from './components/pages/Dashboard';
import { LeaguesPage } from './components/pages/Leagues-page';
import { User } from './utilities/classes';


export const LoggedContext = createContext<any[] | null>(null)

// Users for frontend testing
const ADMIN = new User("admin@email.com","Admintest!","David","Justice",)
const TESTUSER = new User("test@email.com","Testing!","Test","User")

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [users, setUsers] = useState<User[]>([ADMIN,TESTUSER])
  const [currentUser,setCurrentUser] = useState<User>()
  

  function loginUser() {
    let email = document.getElementById("login-email") as HTMLInputElement
    let password = document.getElementById("login-password") as HTMLInputElement
    let hasUser = users.some((user) => {
      return user.email === email.value && user.password === password.value
    })    
    if(hasUser) {
      const loggedUser = users.filter((user) => user.email === email.value && user.password === password.value)[0]
      setCurrentUser(loggedUser)
      setLoggedIn(true)
      console.log(loggedUser)
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
        <Route path='/leagues' element={<LeaguesPage/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/dashboard' element={<Dashboard users={[users,setUsers]} login={loginUser} user={currentUser} currentuser={[currentUser,setCurrentUser]}/>}></Route>
      </Routes>
      </LoggedContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
