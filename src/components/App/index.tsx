//React
import { useEffect } from 'react';

//Context
import { AppProvider } from '../../context/App';
import { DialogProvider } from '../../context/Dialog';

//Onsen UI
import ons from 'onsenui';

//Components
import Navigator from './Navigator';


/**
 * App 
 * 
 * @returns 
 */
function App() {

  useEffect(() => {
    setOnsenFunctions();
  }, []);


  /**
   * setOnsenFunctions
   * 
   */
  const setOnsenFunctions = () => {
    ons.ready(() => {
      //Android Back Button inaktiválása
      ons.disableDeviceBackButtonHandler();
    });
  }


  return (
    <AppProvider>
      <DialogProvider>
        <Navigator />
      </DialogProvider>
    </AppProvider>
  );
}

export default App;
