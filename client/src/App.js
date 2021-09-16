import {Route, Switch} from "react-router-dom";
import WelcomeScreen from "./screens/WelcomeScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import UploadScreen from "./screens/UploadScreen";

function App() {
  return (
    <div>
        <Switch>
            <Route exact path="/" component={WelcomeScreen}/>
            <Route exact path="/about" component={AboutUsScreen}/>
            <Route exact path="/login" component={LoginScreen}/>
            <Route exact path="/dashboard" component={DashboardScreen}/>
            <Route exact path="/upload" component={UploadScreen}/>

        </Switch>
    </div>
  );
}

export default App;
