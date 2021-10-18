import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import CounterScreen  from "./src/screens/CounterScreen";
import RandomNumberScreens  from "./src/screens/RandomNumberScreen";

const navigator = createStackNavigator(
  {
    Home : HomeScreen,
    Counter: CounterScreen,
    Random: RandomNumberScreens
    
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
