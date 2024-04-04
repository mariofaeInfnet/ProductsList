import { useState } from "react";
import { ScrollView, Text, View, Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function EventDetailsScreen({ route }) {
  const { params } = route;
  const {
    event: { name, description, images },
  } = params;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: images[0] }} />

      <Text>{name}</Text>
      <ScrollView>
        <Text>{description}</Text>
      </ScrollView>
    </View>
  );
}

function NearbyHotelsScreen() {
  return (
    <View style={styles.container}>
      <Text>Hotéis Próximos</Text>
    </View>
  );
}

export default function EventDetailsWithBottomNav({ route }) {
  const { params } = route;
  const {
    event: { name },
  } = params;

  return (
    <Tab.Navigator>
      <Tab.Screen name={`Detalhes de ${name}`} component={EventDetailsScreen} initialParams={{ event: params.event }} />
      <Tab.Screen name="Hotéis Próximos ao Evento" component={NearbyHotelsScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 4,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
});