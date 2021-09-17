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
import LocationList from "./components/sections/LocationList";
import FenwayPark from "./components/sections/Descriptions/FenwayPark";
import Chinatown from "./components/sections/Descriptions/Chinatown";
import BostonCommon from "./components/sections/Descriptions/BostonCommon";
import NorthEnd from "./components/sections/Descriptions/NorthEnd";
import QuincyMarket from "./components/sections/Descriptions/QuincyMarket";

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


            <Route exact path="/location/fenway" component={LocationList}/>
            <Route exact path="/fenway" component={FenwayPark}/>
            <Route exact path="/chinatown" component={Chinatown}/>
            <Route exact path="/northend" component={NorthEnd}/>
            <Route exact path="/quincymarket" component={QuincyMarket}/>
            <Route exact path="/bostoncommon" component={BostonCommon}/>



            <Route exact path="/results" component={ResultList}/>
            <Route exact path="/results/:id" component={ResultSingle}/>
            <Route exact path="/detail" component={DetailScreen}/>

        </Switch>
    </div>
  );
}

export default App;
