import React from "react";
import { Header } from "../commoncomponent/Header";
import { AiOutlineUser } from "react-icons/ai";
import { CgGenderFemale } from "react-icons/cg";
import "../style/userDetail/userdetail.scss";
import { BiBookOpen } from "react-icons/bi";
import age from "../images/age.png";
import { FcBusinessman } from "react-icons/fc";
import { FaAward } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { Commonbtn } from "../commoncomponent/Commonbtn";
export const UserDetails = () => {
  return (
    <>
      <Header />
      <div className="basicdetail  ">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-12 col-lg-5  px-0 px-lg-2">
              <form>
                <div className="form-group mt-3">
                  <label for="name" className=" control-label">
                    <AiOutlineUser className="detail_icon_user" />
                    <b p-0 m-0>
                      {" "}
                      Name<font className="text-danger">*</font>{" "}
                    </b>
                  </label>
                  <div>
                    <div className="input-group">
                      <span className="input-group-addon"></span>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Enter your full Name here"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group mt-2">
                  <label for="email" className="cols-sm-2 control-label">
                    <CgGenderFemale className="detail_icon_user" />
                    <b>
                      {" "}
                      Gender<font className="text-danger">*</font>{" "}
                    </b>
                  </label>

                  <div className=" d-flex justify-content-between">
                    <div className="form-check detail_btn_a text-center">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label "
                        for="flexRadioDefault1"
                      >
                        male
                      </label>
                    </div>

                    <div className="form-check detail_btn_b text-center">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label "
                        for="flexRadioDefault1"
                      >
                        Female
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-group mt-2">
                  <label for="email" className="cols-sm-2 control-label">
                    <img src={age} width="35%" className="detail_icon_user" />

                    <b>
                      {" "}
                      Age<font className="text-danger">*</font>{" "}
                    </b>
                  </label>

                  <div className="d-flex justify-content-between">
                    <div className="form-check detail_btn_ca text-center">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label "
                        for="flexRadioDefault1"
                      >
                        18-24 Yrs
                      </label>
                    </div>

                    <div className="form-check detail_btn_ca text-center">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label "
                        for="flexRadioDefault1"
                      >
                        25-30 Yrs
                      </label>
                    </div>

                    <div className="form-check detail_btn_ca text-center">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label "
                        for="flexRadioDefault1"
                      >
                        31-35 Yrs
                      </label>
                    </div>

                    <div className="form-check detail_btn_ca text-center">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label "
                        for="flexRadioDefault1"
                      >
                        36+ Yrs
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-group mt-2">
                  <label for="email" className="cols-sm-2 control-label">
                    <BiBookOpen className="detail_icon_user" />

                    <b>
                      {" "}
                      Qualification<font className="text-danger">*</font>{" "}
                    </b>
                  </label>

                  <div className="d-flex justify-content-between">
                    <div className="form-check detail_btn_cb text-center">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label "
                        for="flexRadioDefault1"
                      >
                        below 10th
                      </label>
                    </div>

                    <div className="form-check detail_btn_cb text-center">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label "
                        for="flexRadioDefault1"
                      >
                        10th Pass
                      </label>
                    </div>

                    <div className="form-check detail_btn_cb text-center">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label "
                        for="flexRadioDefault1"
                      >
                        12th Pass
                      </label>
                    </div>

                    <div className="form-check detail_btn_cb text-center">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label "
                        for="flexRadioDefault1"
                      >
                        Graduate & Above
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-group mt-2">
                  <label for="email" className="cols-sm-2 control-label">
                    <FcBusinessman className="detail_icon_user" />

                    <b>
                      {" "}
                      Currently working <font className="text-danger">
                        *
                      </font>{" "}
                    </b>
                  </label>

                  <div className="d-flex">
                    <div className="form-check detail_btn_cc text-center mr-1">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label "
                        for="flexRadioDefault1"
                      >
                        yes
                      </label>
                    </div>

                    <div className="form-check detail_btn_cc text-center ml-1">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label "
                        for="flexRadioDefault1"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-group mt-2">
                  <label for="email" className="cols-sm-2 control-label">
                    <FaAward className="detail_icon_user" />

                    <b>
                      {" "}
                      Work Experience <font className="text-danger">
                        *
                      </font>{" "}
                    </b>
                  </label>

                  <div className="d-flex">
                    <div className="form-check detail_btn_cc text-center mr-1">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label "
                        for="flexRadioDefault1"
                      >
                        yes
                      </label>
                    </div>

                    <div className="form-check detail_btn_cc text-center ml-1">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label "
                        for="flexRadioDefault1"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-group  mt-2">
                  <label for="name" className=" control-label">
                    <AiOutlineHome className="detail_icon_user" />
                    <b p-0 m-0>
                      {" "}
                      Your Home district <font className="text-danger">
                        *
                      </font>{" "}
                    </b>
                  </label>
                  <div>
                    <div className="input-group">
                      <span className="input-group-addon"></span>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Typer your district here"
                      />
                    </div>
                  </div>
                </div>

                <div className="">
                  <Commonbtn alrt="Next" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
