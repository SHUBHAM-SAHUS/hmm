// import React from "react";
//  import "../style/common/tabs.scss";
//  import{Tab,Tabs} from "react-bootstrap"
// import { Applieduser } from "./Applieduser";
// export const Tabpage=()=>{
//     return(
//         <>
//        <div>
// <div className="d-flex ">

// <Tabs defaultActiveKey="profile" className="d-flex justify-content-between dash_tabs" >
           
           
//   <Tab eventKey="home" title="Applied">

//   </Tab>
//   <Tab eventKey="profile" title="Shortlist">
//  </Tab>

//  <Tab eventKey="selected" title="Shortlist">
//  </Tab>
  
// </Tabs>
// </div>
//  </div>

//         </>
//     );
// }


import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export const Tabpanel=(props)=> {
const { children, value, index, ...other } = props;
   return(
     <>
         
      
     </>
   );

}