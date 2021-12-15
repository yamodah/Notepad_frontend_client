import { Routes, Route, Link } from "react-router-dom"
import { Badge } from "react-bootstrap";
import Notes from "./notes/Notes";
import EditNote from "./notes/EditNote"
import NoNote from "./notes/NoNote"
require("dotenv").config()
function App() {
  return (
    <div className="App" >
      <h1>Notes from Yamodah</h1>
      <h3>Welcome to my virtual notepad!</h3>
      <Link to="/notes" style={{marginTop:"1rem"}}><Badge bg="secondary">NOTES</Badge></Link>
      <Routes>
        <Route path="/notes" element={<Notes />}/>
        <Route path="/notes/:noteId" element={<EditNote />}/>
        <Route element={<NoNote />}/>
      </Routes>
    </div>
  );
}

export default App;
