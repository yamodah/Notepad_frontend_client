import Notes from "./notes/Notes";
require("dotenv").config()
function App() {
  return (
    <div className="App">
      <h1>Notes from Yamodah</h1>
      <h2>Welcome to my virtual notepad!</h2>

          <Notes />
    
    </div>
  );
}

export default App;
