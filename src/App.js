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
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/subscribe" component={Subscribe} />
        <Route exact path="/landing" component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
