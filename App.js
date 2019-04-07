import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "./components/screens/Home";
import LandoltTest from "./components/screens/LandoltTest";
import LandoltResult from "./components/screens/LandoltResult";
import ClassifyCamera from "./components/screens/Camera";
import ClassifyResult from "./components/screens/ClassifyResult";

const Navigator = createStackNavigator(
  {
    Home: { screen: Home },
    LandoltTest: { screen: LandoltTest },
    LandoltResult: { screen: LandoltResult },
    ClassifyCamera: { screen: ClassifyCamera },
    ClassifyResult: { screen: ClassifyResult }
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    navigationOptions: { swipeEnabled: true, gesturesEnabled: true }
  }
);

const App = createAppContainer(Navigator);

export default App;
