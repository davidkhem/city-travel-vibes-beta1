import {Route, Switch} from "react-router-dom";
import WelcomeScreen from "./screens/WelcomeScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import UploadScreen from "./screens/UploadScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import ResultList from "./components/sections/locations/ResultList";
import ResultSingle from "./components/sections/locations/ResultSingle";



//used on demo day
import DetailScreen from "./components/demo/DetailScreen";
import DemoList from "./components/demo/DemoList";
import BostonResults from "./components/demo/BostonResults";
import FenwayPark from "./components/demo/Descriptions/FenwayPark";
import Chinatown from "./components/demo/Descriptions/Chinatown";
import BostonCommon from "./components/demo/Descriptions/BostonCommon";
import NorthEnd from "./components/demo/Descriptions/NorthEnd";
import QuincyMarket from "./components/demo/Descriptions/QuincyMarket";



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


            <Route exact path="/results" component={ResultList}/>
            <Route exact path="/results/:id" component={ResultSingle}/>
            <Route exact path="/detail" component={DetailScreen}/>


//used on demo day
            <Route exact path="/demo" component={DemoList}/>
            <Route exact path="/bostonresults" component={BostonResults}/>
            <Route exact path="/fenway" component={FenwayPark}/>
            <Route exact path="/chinatown" component={Chinatown}/>
            <Route exact path="/northend" component={NorthEnd}/>
            <Route exact path="/quincymarket" component={QuincyMarket}/>
            <Route exact path="/bostoncommon" component={BostonCommon}/>

        </Switch>
    </div>
  );
}

export default App;
