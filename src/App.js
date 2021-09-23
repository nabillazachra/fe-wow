import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//pages component
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Subscribe from "./pages/Subscribe";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/subscribe" component={Subscribe} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
