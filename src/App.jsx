import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./Footer";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import Players from "./Players";
import Contact from "./Contact";
import Detail from "./Detail";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
          <Route path='/' element={<Players/>}> 
      </Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
