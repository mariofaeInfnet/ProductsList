import {
  Image,
  Text,
  View,
  StyleSheet
} from 'react-native';

export default  function Especifications({ product }) {
  return (
    <View style={styles.tabScreen}>
      <Text style={styles.title}>{product.name}</Text>
      <Text>{product.description}</Text>
      <Image
        source={{ uri: 'https://picsum.photos/700' }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  tabScreen: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});