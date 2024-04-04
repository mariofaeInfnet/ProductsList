import { createDrawerNavigator } from '@react-navigation/drawer';
import AppData from '../../screens/AppData/AppData';
import ProductsStack from '../ProductsStack/ProductsStack'

const Drawer = createDrawerNavigator();

export default function DrawerMenu() {
  return (
    <Drawer.Navigator initialRouteName="ProductsStack">
      <Drawer.Screen
        name="Produtos"
        component={ProductsStack}
        options={{ drawerLabel: 'Produtos' }}
      />
      <Drawer.Screen
        name="Dados do Aplicativo"
        component={AppData}
        options={{ drawerLabel: 'Dados do Aplicativo' }}
      />
    </Drawer.Navigator>
  );
}