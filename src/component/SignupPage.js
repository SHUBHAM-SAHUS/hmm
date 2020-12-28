 import React from "react";
 import "../style/signup/sign.scss";
  import {useHistory} from "react-router-dom";
 import logob from "../images/logob.png";
 import facebook from "../images/face.png";
 import google from "../images/google.png";
import { Commonbtn } from "../commoncomponent/Commonbtn";
 export const SignupPage=()=>{
     const history = useHistory();
      return(
          <>
           <div  className="main_signup">
           <div className="row no-gutters">
               <div  className="col-12 col-lg-4" >
                    <div className='px-5 pt-3'>
                    <div className="d-flex justify-content-center">
                        <img src={logob} width="80%" alt="logo"/>
                    </div>
                       <div className="px-5 mt-3">
                     <div className="d-flex  justify-content-center justify-content-between">
                        <li className="frm_taba "><a href="#" className="frm_ra"> Sign Up</a>  </li>
                        <li className="frm_tabb "><a href="#" className="frm_rb" onClick={()=>history.push("/signup")}>Sign In </a>   </li> 
                     </div>
                     </div>

                     

             <div className=" mt-4">
                    <h2 className="login_ba text-center"> with your social network</h2> 
                    <div className="d-flex justify-content-center justify-content-between px-2 mt-2">
                    <button  className=" btn_c mr-1">  <img src={facebook}  alt="face" className="login_facebook_a" /> Facebook </button>
                    <button className="btn_d ml-1" >  <img src={google} alt="face" className="login_google_a" /> Google </button>
                    </div>
                    </div>   
                                  <p className="capitalize text-center mt-2"> or</p>

                                   <div>
    <form type="submit">
  <div className="mb-2">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-2">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-2 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  {/* <button type="submit" className="btn btn-primary">Submit</button> */}
  <Commonbtn
   
   alrt="Login"
  />
</form>

                                   </div>


                </div>
               </div>
                
          </div>
             

           </div>
          </>
      );
  }