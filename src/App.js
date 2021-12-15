import { Routes, Route, Link } from "react-router-dom"
import { Badge } from "react-bootstrap";
import Notes from "./notes/Notes";
import EditNote from "./notes/EditNote"
import NoNote from "./notes/NoNote"
import Footer from "./footer/Footer"
import Home from "./home/Home"
require("dotenv").config()
function App() {
  return (
    <div className="App" >
      <h1>Notes from Yamodah</h1>
      <h3>Welcome to my virtual notepad!</h3>
      <Link to="/notes" style={{marginTop:"1rem"}}><Badge bg="secondary">NOTES</Badge></Link>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/notes" element={<Notes />}/>
        <Route path="/notes/:noteId" element={<EditNote />}/>
        <Route path="*" element={<NoNote />}/>
      </Routes>

        <Footer />

    </div>
  );
}

export default App;
