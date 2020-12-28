import React from "react";
import { BiFilterAlt } from "react-icons/bi";
import pp from "../images/pp.png";
import rr from "../images/rr.png";
import tt from "../images/tt.png";
import ss from "../images/ss.png";
import nn from "../images/nn.png";
import mm from "../images/mm.png";
import hh from "../images/hh.png";
import ee from "../images/ee.png";
import dd from "../images/dd.png";
import "../style/jobintrested/job.scss";
export const Jobintrested = () => {
  return (
    <>
      <div className="job_main">
        <div className="container ">
          <div className="row ">
            <div className=" col-lg-4 ">
              <div className="d-flex justify-content-end pt-2">
                <BiFilterAlt className="job_icon_a" />
                <p className="job_icon_b">filter by Sector</p>
              </div>
              <hr className="hrr" />
              <div className="d-flex justify-content-around mt-4">
                <div className="col-4">
                  <div className="d-flex justify-content-center">
                    {" "}
                    <img src={hh} width="100%" alt="image" />{" "}
                  </div>
                  <h6 className="job_title text-center">
                    {" "}
                    House Help/ Care Taker
                  </h6>
                </div>

                <div className="col-4">
                  <div className="d-flex justify-content-center">
                    {" "}
                    <img src={ss} width="100%" alt="image" />{" "}
                  </div>
                  <h6 className="job_title text-center"> Field Sales Agent</h6>
                </div>

                <div className="col-4">
                  <div className="d-flex justify-content-center">
                    <img src={nn} width="100%" alt="image" />{" "}
                  </div>
                  <h6 className="job_title text-center"> Plumbling</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-12 col-lg-4 ">
              <div className="d-flex justify-content-between">
                <div className="col-4">
                  <div className="d-flex justify-content-center">
                    <img src={tt} width="100%" alt="image" />{" "}
                  </div>
                  <h6 className="job_title text-center"> Plumbling</h6>
                </div>

                <div className="col-4">
                  <div className="d-flex justify-content-center">
                    <img src={pp} width="100%" alt="image" />{" "}
                  </div>
                  <h6 className="job_title text-center"> Plumbling</h6>
                </div>

                <div className="col-4">
                  <div className="d-flex justify-content-center">
                    <img src={mm} width="100%" alt="image" />{" "}
                  </div>
                  <h6 className="job_title text-center"> Plumbling</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-12 col-lg-4 ">
              <div className="d-flex justify-content-between">
                <div className="col-4">
                  <div className="d-flex justify-content-center">
                    <img src={ee} width="100%" alt="image" />{" "}
                  </div>
                  <h6 className="job_title text-center"> Plumbling</h6>
                </div>

                <div className="col-4">
                  <div className="d-flex justify-content-center">
                    <img src={ss} width="100%" alt="image" />{" "}
                  </div>
                  <h6 className="job_title text-center"> Plumbling</h6>
                </div>

                <div className="col-4">
                  <div className="d-flex justify-content-center">
                    <img src={nn} width="100%" alt="image" />{" "}
                  </div>
                  <h6 className="job_title text-center"> Plumbling</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-4"></div>
      </div>
    </>
  );
};
