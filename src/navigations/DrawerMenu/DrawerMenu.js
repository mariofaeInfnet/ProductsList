import { createDrawerNavigator } from "@react-navigation/drawer";

import AppInfoScreen from "../../screens/AppInfoScreen";
import EventsStack from "../EventsStack/EventsStack";
import NewEventScreen from '../../screens/NewEventScreen';
import PersonalGalleryScreen from '../../screens/PersonalGalleryScreen';

const Drawer = createDrawerNavigator();

export default function DrawerMenu() {
  return (
    <Drawer.Navigator
      initialRouteName="AppInfo"
      screenOptions={{ drawerPosition: "right" }}
    >
      <Drawer.Screen
        name="Dados do Aplicativo"
        component={AppInfoScreen}
        options={{ drawerLabel: "Dados do Aplicativo" }}
      />
      <Drawer.Screen
        name="Lista  de Eventos"
        component={EventsStack}
        options={{ drawerLabel: "Lista  de Eventos" }}
      />
      <Drawer.Screen
        name="NewEvent"
        component={NewEventScreen}
        options={{ drawerLabel: 'Inserir Novo Evento' }}
      />
      <Drawer.Screen
      name="Minha Galeria de Fotos"
      component={PersonalGalleryScreen}
      options={{ drawerLabel: 'Minha Galeria de Fotos' }}
      />
    </Drawer.Navigator>
  );
}
