import logo from './logo.svg';
import './App.css';
import GoogleSheetsProvider from 'react-db-google-sheets';
import Portraits from './Portraits.js'
import { createContext, useState } from 'react';





function App() {
  const [db, setDb] = useState(null);
  const context = {
    language: 'en',
    db: null,
    setDb: (newDb) => setDb(newDb)
  }
  const AppContext = createContext(context)
  return (
    <GoogleSheetsProvider>
      <AppContext.Provider>
        <div className="App">
          <Portraits />
        </div>
      </AppContext.Provider >
    </GoogleSheetsProvider>

  );
}

export default App;


