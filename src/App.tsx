import { useState } from 'react';
import './App.scss';
import { AppRouter } from './routes/AppRouter';
import React from 'react';
import { ILoadingContextValue } from './TypesInterfaces';

export const LoadingContext = React.createContext<ILoadingContextValue>({loading: true, setLoading: () => {}});

function App() {
  
  const [loading, setLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
        <AppRouter />
    </LoadingContext.Provider>
  );
}

export default App;
