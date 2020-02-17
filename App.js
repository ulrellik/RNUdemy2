import React from 'react';

import AppNavigation from './navigation/AppNavigation';
import { PlacesProvider } from './context/PlacesContext';

export default function App() {
  return (
    <PlacesProvider>
      <AppNavigation />
    </PlacesProvider>
  );
}
