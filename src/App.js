 import  React from "react";
 import "./style/common/space.scss";
 import {Switch,Route} from "react-router-dom"; 
import { Header } from "./commoncomponent/Header";
import { Community } from "./component/Community";
import { Dashboard } from "./component/Dashboard";
import { HeadFooter } from "./component/HeadFooter";
import { Jobs } from "./component/Jobs";
import { Notifications } from "./component/Notifications";
import { Profile } from "./component/Profile";
import { SignupPage } from "./component/SignupPage";
import { Loginpage } from "./component/Loginpage";
import { CommonModal } from "./commoncomponent/CommonModal";
import { Sidebar } from "./component/Sidebar";

 const App=()=>{
   return(
     <>
    <Header/>
    {/* <Sidebar/> */}
     
<Switch>

<Route  exact path="/" >   <SignupPage/> </Route>
<Route  exact path="/signup" >   <Loginpage/> </Route>
<Route  exact path="/dashboard" > <Dashboard/> </Route>
<Route  exact path="/community" >  <Community/>  </Route>
<Route  exact path="/jobs" >  <Jobs/> </Route>
<Route exact  path="/notifications" > <Notifications/> </Route>
<Route  exact path="/profile" >   <Profile/>   </Route>


</Switch>

 <HeadFooter/>
  
   
   </>
   );
 }
 export default App;