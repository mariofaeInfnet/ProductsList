import {
  Text,
  StyleSheet,
  FlatList,
  View,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();



export default function Questions({ product }) {
  return (
    <FlatList
      data={product.questions}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text>Usuário: {item.user}</Text>
          <Text>Data: {item.date}</Text>
          <Text>Dúvida: {item.question}</Text>
          <Text>Resposta: {item.answer}</Text>
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
  },
});
