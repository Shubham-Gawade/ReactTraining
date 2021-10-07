import './App.css';
import MyCard from './components/MyCard';
import {Greet,Hello} from './components/GreetFC';
import GreetCC from './components/GreetCC';
import PropsFC from './components/PropsFC';
import PropsCC from './components/PropsCC';
import StateCC from './components/StateCC';
import StateFC from './components/StateFC';
import EventHandlingCC from './components/EventHandlingCC';
import EventHandlingFC from './components/EventHandlingFC';
import EventBinding1 from './components/EventBinding1';
import EventBinding2 from './components/EventBinding2';
import EventBinding3 from './components/EventBinding3';
import EventBinding4 from './components/EventBinding4';
import ConditionalRendering from './components/ConditionalRendering';
import HoverCounter from './components/HoverCounter';
import ClickCounter from './components/ClickCounter';
import LifeCycle1 from './components/LifeCycle1';
import RoutingDemo from './routing/RoutingDemo';
import FakeAPI from './API/FakeAPI';
import FormDemo from './components/FormDemo';
import { Validation1 } from './components/Validation1';
import { Validation2 } from './components/Validation2';

function App() {
  return (
    <div className="App">
      <RoutingDemo/>
      {/* <MyCard name="Shubham"/>
      <hr></hr>
      <Greet />
      <Hello />
      <GreetCC />
      
      <PropsFC uname="John" city="Pune"/>
      <PropsFC uname="Smith" city="Mumbai"/>
      <PropsFC uname="Jane" />
      
      <PropsCC uname="Shubham" city="Banglore">Welcome to React</PropsCC>
      <PropsCC >Welcome to React</PropsCC>
      
      <StateCC/>
      
      <StateFC/>
      <StateFC uname="Shubham" pass="Shubham@123"/>
      
      Using Class : <EventHandlingCC/>
      <br/>
      Using Function :  <EventHandlingFC/>
      
      <EventBinding1/>
      
      <EventBinding2/>
      
      <EventBinding3/>
 
      <EventBinding4/>
      
      <ConditionalRendering/>

      <HoverCounter/>
      
      <ClickCounter/>
    
      <LifeCycle1/>

      <FakeAPI/> 
  
      <FormDemo/> 

      <Validation1/> */}

      <Validation2/>
    </div>
  );
}

export default App;
