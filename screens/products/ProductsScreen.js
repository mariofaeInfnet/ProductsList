import {
  ActivityIndicator,
  Dimensions,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';
import products from '../../products.json';
import { useEffect, useState } from 'react';
import { Card } from 'react-native-paper';

export default function ProductsScreen({ navigation }) {
  const [isLandscape, setIsLandscape] = useState(
    Dimensions.get('window').width > Dimensions.get('window').height
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const updateOrientation = () => {
      const { width, height } = Dimensions.get('window');
      setIsLandscape(width > height);
    };

    Dimensions.addEventListener('change', updateOrientation);

    return () => {
      Dimensions.removeEventListener('change', updateOrientation);
    };
  }, []);

  const renderProduto = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Produto', { product: item })}>
      <Card>
        <Card.Title title={item.name} />
        <Card.Content>
          <Text>{item.description}</Text>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      </Card>
    </TouchableOpacity>
  );

  if (isLoading) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ItemSeparatorComponent={<View style={{ width: 10 }} />}
        horizontal={isLandscape}
        data={products}
        renderItem={renderProduto}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
