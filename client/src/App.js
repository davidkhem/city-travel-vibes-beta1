import {Route, Switch} from "react-router-dom";
import WelcomeScreen from "./screens/WelcomeScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";

function App() {
  return (
    <div className="flex justify-center bg-black">
        <Switch>
            <Route exact path="/" component={WelcomeScreen}/>
            <Route exact path="/about" component={AboutUsScreen}/>
            <Route exact path="/login" component={LoginScreen}/>
            <Route exact path="/dashboard" component={DashboardScreen}/>

        </Switch>
    </div>
  );
}

export default App;
