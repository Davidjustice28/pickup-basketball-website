import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { HomePage } from './pages/Home-page';
import { LeaguesPage } from './pages/Leagues-page';
import { AboutPage } from './pages/About-page';
import { NavBar } from './components/Navbar';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/leagues' element={<LeaguesPage/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
