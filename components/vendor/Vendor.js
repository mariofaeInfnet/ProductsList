import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default function Vendor({ product }) {

  return (
    <View style={styles.tabScreen}>
      <Text>
        Nome: {product.vendorData.name}
      </Text>
      <Text>
        Telefone: {product.vendorData.phone}
      </Text>
      <Text>
        Email: {product.vendorData.email}
      </Text>
      <Text>
        Avaliação: {product.vendorData.rating}
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  tabScreen: {
    flex: 1,
    padding: 10,
  }
});