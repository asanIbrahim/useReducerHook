import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import Value from './Value';

import { VideoBar } from './VideoBar';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello User, let's build a YouTube Clone</h1> */}
      <Header/>
      <div className='app-sideBar'>
      <SideBar/>
      <VideoBar/>
      <Value/>
      </div>
    </div>
  );
}

export default App;
