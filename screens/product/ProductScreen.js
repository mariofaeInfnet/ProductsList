import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useEffect, useState } from 'react';
import  Comments  from '../../components/comments/Comments'
import Especifications from '../../components/especifications/Especifications'
import Vendor from '../../components/vendor/Vendor'
import Questions from  '../../components/questions/Questions'
const Tab = createBottomTabNavigator();


export default function ProductScreen() {
  const route = useRoute();
  const { product } = route.params;

  const [isLandscape, setIsLandscape] = useState(
    Dimensions.get('window').width > Dimensions.get('window').height
  );
  useEffect(() => {
    const updateLayout = () => {
      setIsLandscape(
        Dimensions.get('window').width > Dimensions.get('window').height
      );
    };

    Dimensions.addEventListener('change', updateLayout);
    return () => Dimensions.removeEventListener('change', updateLayout);
  }, []);

  const containerStyle = isLandscape
    ? styles.containerLandscape
    : styles.container;

  return (
    <SafeAreaView style={containerStyle}>
      <Tab.Navigator>
        <Tab.Screen name="Especificações">
          {() => <Especifications product={product} />}
        </Tab.Screen>
        <Tab.Screen name="Vendedor">
          {() => <Vendor product={product} />}
        </Tab.Screen>
        <Tab.Screen name="Dúvidas">
          {() => <Questions product={product} />}
        </Tab.Screen>
        <Tab.Screen name="Comentários">
          {() => <Comments product={product} />}
        </Tab.Screen>
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLandscape: {
    flex: 1,
    flexDirection: 'row',
  }
});
