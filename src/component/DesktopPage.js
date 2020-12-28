import React from "react";
import "../style/desktop/desktop.scss";
import jobs from "../images/jobs.jpg";
import { SignupPage } from "./SignupPage";
export const DesktopPage = () => {
  return (
    <>
      <div className="main_desktop">
        <div className="sub_desktop">
          <div className="row no-gutters">
            <div
              className="col-md-7  back"
              style={{ backgroundImage: `url(${jobs})` }}
            ></div>
            <div className="col-md-5">
              <SignupPage />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
