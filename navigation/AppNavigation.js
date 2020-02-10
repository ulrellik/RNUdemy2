import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MapScreen, PlaceDetailsScreen, PlaceNewScreen, PlacesScreen } from '../screens'

const Stack = createStackNavigator();

export default function AppNavigation() {
 return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Home" component={PlacesScreen} options={({ navigation, route }) => ({
         headerRight: () => <Button onPress={() => navigation.navigate('New Place')} title="Add Place" />,
       })} />
       <Stack.Screen name="New Place" component={PlaceNewScreen} />
     </Stack.Navigator>
   </NavigationContainer>
 );
}
