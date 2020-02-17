import React, { useState, useCallback } from 'react';
import { Text, TextInput, Button } from 'react-native';

import { usePlaces } from '../context/PlacesContext';

export default function PlacesNewScreen({ navigation }) {
  const [, dispatch] = usePlaces();
  const [place, setPlace] = useState('');
  const onPress = useCallback(() => {
    dispatch({ type: 'add', payload: { id: place, title: place }});
    navigation.goBack();
  },[place, navigation]);

  return (
    <>
      <Text>Add a new place:</Text>
      <TextInput placeholder="Place" value={place} onChangeText={setPlace}/>
      <Button title="Submit" onPress={onPress}/>
    </>

  );
}
