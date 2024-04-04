import { createStackNavigator } from '@react-navigation/stack';
import ProdutoScreen from '../../screens/product/ProductScreen';
import ProdutosScreen from '../../screens/products/ProductsScreen';

const Stack = createStackNavigator();

export default function ProductsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Produtos" component={ProdutosScreen} />
      <Stack.Screen name="Produto" component={ProdutoScreen} />
    </Stack.Navigator>
  );
}