import { NavigationContainer } from "@react-navigation/native";

import DrawerMenu from "./src/navigations/DrawerMenu/DrawerMenu";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerMenu />
    </NavigationContainer>
  );
}
