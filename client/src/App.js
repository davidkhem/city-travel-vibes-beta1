import {Route, Switch} from "react-router-dom";
import WelcomeScreen from "./screens/WelcomeScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import UploadScreen from "./screens/UploadScreen";
import DetailScreen from "./screens/DetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import ResultList from "./components/sections/ResultList";
import ResultSingle from "./components/sections/ResultSingle";

function App() {
  return (
    <div>
        <Switch>
            <Route exact path="/" component={WelcomeScreen}/>
            <Route exact path="/about" component={AboutUsScreen}/>
            <Route exact path="/login" component={LoginScreen}/>
            <Route exact path="/dashboard" component={DashboardScreen}/>
            <Route exact path="/upload" component={UploadScreen}/>
            <Route exact path="/favorites" component={FavoritesScreen}/>
            <Route exact path="/detail" component={DetailScreen}/>

            <Route exact path="/results" component={ResultList}/>
            <Route exact path="/results/:id" component={ResultSingle}/>


        </Switch>
    </div>
  );
}

export default App;
