import React, { useReducer, useContext } from 'react';

const StateContext = React.createContext([]);
const DispatchContext = React.createContext(() => {});

function reducer(state, action) {
  switch (action.type) {
    case 'add': {
      return [...state, action.payload];
    }
    case 'remove': {
      return state.filter(place => place.id === action.payload);
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export function PlacesProvider({children}) {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

function useState() {
  const context = useContext(StateContext);
  if (context === undefined) throw new Error('useCountState must be used within a CountProvider');
  return context;
}

function useDispatch() {
  const context = useContext(DispatchContext);
  if (context === undefined) throw new Error('useCountDispatch must be used within a CountProvider');
  return context;
}

export function usePlaces() {
  return [useState(), useDispatch()];
}
