import { Routes, Route, Link } from "react-router-dom"
import { Badge } from "react-bootstrap";
import Notes from "./notes/Notes";
import EditNote from "./notes/EditNote"
require("dotenv").config()
function App() {
  return (
    <div className="App" >
      <h1>Notes from Yamodah</h1>
      <h2>Welcome to my virtual notepad!</h2>
      <Link to="/notes" style={{marginTop:"1rem"}}><Badge bg="secondary">NOTES</Badge></Link>
      <Routes>
        <Route exact path="/notes" element={<Notes />}/>
        <Route path="/notes/:noteId" element={<EditNote />}/>
      </Routes>
    </div>
  );
}

export default App;
