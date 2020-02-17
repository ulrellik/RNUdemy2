import React from 'react';
import { Text, FlatList } from 'react-native';

import { usePlaces } from '../context/PlacesContext';

export default function PlacesScreen() {
  const [places] = usePlaces();

  return (
    <FlatList data={places} renderItem={({item}) => (<Text>{item.title}</Text>)}/>
  );
}
