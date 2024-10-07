import logo from './logo.svg';
import './App.css';
 import Greet from './components/Greet';
 import Greet1 from './components/Greet1';
 import Hello from './components/Hello';        
 import Message from './components/Message';
 import Counter from './components/Counter';
 import Functionclick from './components/Functionclick';
 import Classclick from './components/Classclick';
 import EventBind from './components/EventBind';
 import UserGreeting from './components/UserGreeting'
 import NameList from './components/NameList';
 import Stylesheet from './components/Stylesheet';
 import Inline from './components/Inline';
 import './appStyles.css';
 import styles from './appStyles.modules.css';
 import Form from './components/Form';
 import LifecycleA from './components/LifecycleA';
 import FragmentDemo from './components/FragmentDemo';
 import Table from './components/Table';
import PureComponent from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRparentinput from './components/FRparentinput';
import PortalDemo from './components/PortalDemo';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counter1 from './components/Counter1';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';

      //2.stateless functional component:
 function App() {
   return (
    <div className="App">
       <Counter />
         <Greet name="Bunny" city="tirupati" age="20"/>
        <p>This is gully boy</p>
        
       
       <Greet name="Praneeth" city="Banglore" age="27"/>

       <Functionclick /> 
       <Classclick />
       <EventBind />
       <UserGreeting />
       <NameList />
        

         <Stylesheet primary={true} />
        <Inline />

        <h1 id='error'>ERROR</h1>
        <h4 className={styles.success}>SuCcEsS</h4>   

        <Form />

        <LifecycleA/>

        <FragmentDemo />

        <Table />
         
         <PureComponent/> 
        <ParentComp />
        <RefsDemo />
        <FocusInput />
        <FRparentinput />

        <PortalDemo/>
        <ClickCounter />
        <HoverCounter />
        <Counter1
        render = {(Count,incremenCount)=>(
          <ClickCounterTwo
          Count={Count} incremenCount ={incremenCount}/>)}/>
          <Counter1
          render = {(Count,incremenCount)=>(
            <HoverCounterTwo
            Count={Count} incremenCount ={incremenCount}/>)}/>
          
        {/* <ClickCounterTwo  />
        <HoverCounterTwo /> */}
        <User render={ (isloggedIn) => isloggedIn ? "hey Bunny how are you?" : "Welcome Guest"}/> 
           {/* it is a function so we give parenthesisi in user.js for props.name */}
      
       <UserProvider value='Allichetty Praneeth'>
       <ComponentC/>
       </UserProvider>        
       {/* <button>Submit</button>
   
        <Greet name="charan" city="Hyderabad" age="28" /> 

         <Greet1 name="charan" city="Hyderabad"/> 
        <Greet1 name="Ram" city="secundrabad" age="28"/> 

       <Hello />    

       <Message /> */}
    </div>
  
  );
}


export default App;
