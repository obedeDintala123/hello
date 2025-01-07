import {useState, useEffect} from 'react';
import { Outlet } from 'react-router-dom';

import Splash from './compontes/screens/splash';

import {FormProvider} from './context/FormContext'

function App() {
  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {

    const timer = setInterval(() => {
      setSplashVisible(false);
    }, 5000);

    return () => {
      clearInterval(timer);
    }

  }, [])

  return (
   <FormProvider>
   {splashVisible ? <Splash /> : <Outlet />}
   </FormProvider>
  )
}

export default App;
