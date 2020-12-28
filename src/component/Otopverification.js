import React from "react";
import "../style/otp/otp.scss";
import forest from "../images/forest.jpg";
import logo from "../images/logo.png";
import { Commonbtn } from "../commoncomponent/Commonbtn";
export const Otpverification = () => {
  return (
    <>
      <div className="top_main">
        <div className="row  no-gutters">
          <div className="col-md-8 otp_ra">
            <img src={forest} width="100%" alt="forest" />
          </div>

          <div className="col-md-4  otp_rb">
            <div className="px-3 px-lg-5   pt-5">
              <div className="d-flex justify-content-center">
                <img src={logo} width="200px" alt="logo" className="mx-auto" />
              </div>

              <p className="otp_ver text-center text-uppercase mt-4">
                {" "}
                OTP Verfication
              </p>

              <div>
                <form className="">
                  <p className="otp_b text-bold p-0 m-0 text-center">
                    {" "}
                    Enter Otp sent to{" "}
                  </p>
                  <input type="text" name="" className="otp_input py-2" />

                  <div className="form-check mt-2 ">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" for="gridCheck  otp_tc">
                      <p className=" otp_tc">
                        {" "}
                        i hereby agree to the{" "}
                        <a href="#" className="text-decoration-none">
                          {" "}
                          T&c
                        </a>{" "}
                        of the{" "}
                        <a href="#" className="text-decoration-none">
                          {" "}
                          privacy policy{" "}
                        </a>
                      </p>{" "}
                    </label>
                  </div>

                  <div className="mt-2 d-flex justify-content-center mb-3 mt-4">
                    {" "}
                    Did not received the Otp?{" "}
                    <a href="#" className="text-decoration-none">
                      {" "}
                      Respond
                    </a>{" "}
                  </div>

                  <Commonbtn alrt="Verify & Proceed" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
