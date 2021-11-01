//#region imports
import './App.css';
import UserContext from './contexts/UserContext';
import AppRouter from './Routes/AppRouter';
import { useState } from 'react';
//#endregion

//#region reder the app 
function App() {
  const [stateInitial, SetStateInitial] = useState(null);
  return (
    <UserContext.Provider value={{user : stateInitial,setUser : SetStateInitial}}>
      <div className="Contex__App">
        <div className="App">
          <AppRouter />
        </div>
      </div>
    </UserContext.Provider>
  );
}
//#endregion

export default App;
