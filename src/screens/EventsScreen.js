import {
  ActivityIndicator,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { Card, Button } from "react-native-paper";

function converter(data) {
  const ids = Object.keys(data);
  const events = Object.values(data);
  const eventsList = events.map((event, index) => {
    return {
      _id: ids[index],
      ...event,
    };
  });
  return eventsList;
}

export default function EventsScreen({ navigation }) {
  const url = "https://tp02-b5c14-default-rtdb.firebaseio.com";
  const resource = "events";
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`${url}/${resource}.json`)
      .then((res) => res.json())
      .then((eventsJson) => {
        const events = converter(eventsJson);
        setEvents(events);
        setFilteredEvents(events);
      })
      .finally((_) => setIsLoading(false));
  }, []);

  const searchEvent = () => {
    const eventUppercase = search.toUpperCase();
    const searchedEvents = events.filter((event) =>
      event.name.toUpperCase().includes(eventUppercase)
    );
    setFilteredEvents(searchedEvents);
  };

  const renderEvent = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Event", { event: item })}
    >
      <Card>
        <Card.Title title={item.name} />
        <Card.Content>
          <Text>R${item.price}</Text>
        </Card.Content>
        <Card.Cover source={{ uri: item.images[0] }} />
      </Card>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator
          style={styles.activityIndicator}
          size="large"
          color="#0000ff"
        />
      ) : (
        <>
          <TextInput
            placeholder="Pesquisar"
            onChangeText={setSearch}
            value={search}
            style={styles.input}
          />
          <Button onPress={searchEvent}>Pesquisar</Button>

          <FlatList
            ItemSeparatorComponent={<View style={{ width: 10 }} />}
            data={filteredEvents}
            renderItem={renderEvent}
            keyExtractor={(item) => item._id}
          />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
