import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { getDatabase, ref, push } from 'firebase/database';

import app from "../../Firebase";

export default function NewEventScreen({ navigation }) {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const handleSaveEvent = () => {
    const db = getDatabase(app);
    const eventsRef = ref(db, 'events');
    const newEventRef = push(eventsRef);

    const eventData = {
      name: eventName,
      description: eventDescription,
    };

    newEventRef.set(eventData)
      .then(() => {
        console.log('Evento salvo com sucesso!');
        navigation.navigate('Events');
      })
      .catch((error) => {
        console.error('Erro ao salvar o evento:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Nome do Evento:</Text>
      <TextInput
        style={styles.input}
        value={eventName}
        onChangeText={setEventName}
      />
      <Text>Descrição do Evento:</Text>
      <TextInput
        style={styles.input}
        value={eventDescription}
        onChangeText={setEventDescription}
      />
      <Button title="Salvar Evento" onPress={handleSaveEvent} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
});