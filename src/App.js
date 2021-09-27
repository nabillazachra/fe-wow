import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./pages/PrivateRoute";

//pages component
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Subscribe from "./pages/Subscribe";
import LandingPage from "./pages/LandingPage";
import DetailBook from "./pages/DetailBook";
import ReadBook from "./pages/ReadBook";
import EditProfile from "./pages/EditProfile";
import NotFound from "./pages/NotFound";
import AddBook from "./pages/admin/AddBook";
import Admin from "./pages/admin/Admin";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/subscribe" component={Subscribe} />
        <PrivateRoute path="/home" component={Home} />
        <Route exact path="/admin" component={Admin} />
        <PrivateRoute path="/detail-book/:id" component={DetailBook} />
        <PrivateRoute path="/read-book" component={ReadBook} />
        <Route exact path="/add-book" component={AddBook} />
        <PrivateRoute path="/edit-profile" component={EditProfile} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
