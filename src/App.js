import {useState, useEffect} from 'react';

import Splash from './compontes/screens/splash';

import SignIn from './compontes/screens/signIn';
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
    <>
     {
        splashVisible ? <Splash /> : <SignIn />
     }
    </>
  );
}

export default App;
