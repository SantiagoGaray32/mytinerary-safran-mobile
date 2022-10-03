//quitar todo del return de la Función y colocar por ej el componente Drawer dentro del NavigationContainer

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./src/navigation/drawer";
import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </Provider>
  );
}
