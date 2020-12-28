import React from "react";
import "../style/login/login.scss";
//  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit,faFacebookf} from '@fortawesome/free-solid-svg-icons';

import forest from "../images/forest.jpg";
import logo from "../images/logob.png";
import facebook from "../images/face.png";
import google from "../images/google.png";
import { Commonbtn } from "../commoncomponent/Commonbtn";

// import { FALSE } from "node-sass";
export const Loginpage = () => {
  return (
    <>
      <div className="main_login">
        <div className="row  no-gutters">
          <div className=" col-12 col-lg-4   p-0  rb">
            <div className=" login_aa ">
              <div className="d-flex justify-content-center ">
                <img src={logo} width="50%" alt="logo" />
              </div>

              <div className="d-flex justify-content-center mt-3">
                <h2 className="logo_bb">
                  हिन्दी/<strong className="logo_cc">English</strong>
                </h2>
              </div>
              <div className="d-flex  justify-content-between px-3 mt-2 justify-content-center">
                <button className="btn_a mr-1"> Member </button>
                <button className="btn_b  ml-1"> Employer </button>
              </div>

              <div className=" mt-3">
                <h2 className="login_ba text-center">
                  {" "}
                  with your social network
                </h2>

                <div className="d-flex justify-content-center justify-content-between px-2 mt-3">
                  <button className=" btn_c mr-1">
                    {" "}
                    <img
                      src={facebook}
                      alt="face"
                      className="login_facebook_a"
                    />{" "}
                    Facebook{" "}
                  </button>
                  <button className="btn_d ml-1">
                    {" "}
                    <img
                      src={google}
                      alt="face"
                      className="login_google_a"
                    />{" "}
                    Google{" "}
                  </button>
                </div>

                <div className="text-center mt-3">
                  <p className="fnt">or </p>{" "}
                </div>

                <div className="mt-2 ">
                  <h2 className="login_ba text-center capitalize">
                    {" "}
                    Login with mobile number{" "}
                  </h2>

                  <div className="mt-4">
                    <form>
                      <p className="text-center p-0 m-0">
                        {" "}
                        Enter 10 digit mobile number{" "}
                      </p>
                      <input type="type" name="" className="login_input py-2" />
                      <div className="mt-3">
                        <Commonbtn alrt="Send OTP Via SMS" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
