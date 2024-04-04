import {
  Text,
  StyleSheet,
  FlatList,
  View,
} from 'react-native';

export default function Comments({ product }) {
  return (
    <FlatList
      data={product.comments}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text>Usuário: {item.user}</Text>
          <Text>Data: {item.date}</Text>
          <Text>Comentário: {item.comment}</Text>
          <Text>Nota: {item.rating}</Text>
        </View>
      )}
      style={styles.tabScreen}
    />
  );
}

const styles = StyleSheet.create({
  tabScreen: {
    flex: 1,
    padding: 10,
  },
  card: {
    marginVertical: 8,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  }
});
