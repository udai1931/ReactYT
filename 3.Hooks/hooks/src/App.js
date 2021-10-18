import logo from './logo.svg';
import './App.css';
import Us from './Components/Us';
import Ue1 from './Components/Ue1';
import Ue2 from './Components/Ue2';
import Infinite from './Components/Infinite';
import Ue3 from './Components/Ue3'
import context from './Components/Context'
import {useState} from 'react';
import Navbar from './Components/Navbar';
import Parent1 from './Components/Parent1';
import Parent2 from './Components/Parent2';

function App() {
  const [theme,setTheme] = useState(false);
  const [count,setCount] = useState(10);
  return (
    <context.Provider value={{theme,count}}>
      <button onClick={()=>setTheme(!theme)}>Change Theme</button>
      <button onClick={()=>setCount(count+1)}>Update Count</button>
      {/* <Infinite/> */}
      {/* <Ue2/> */}
      {/* <Ue1/> */}
      {/* <Us/> */}
      {/* <Ue3/> */}
      <Navbar/>
      <Parent1/>
      <Parent2/>
    </context.Provider>

  );
}

export default App;
