import {Switch, Route } from "react-router-dom"
import Notes from "./notes/Notes";
function App() {
  return (
    <div className="App">
      <h1>Notes from Yamodah</h1>
      <h2>Welcome to my virtual notepad!</h2>
      <Switch>
        <Route  exact path="/">
          <Notes />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
