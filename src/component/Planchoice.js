import React from "react";
import "../style/common/plan.scss";
import { Tab, Tabs } from "react-bootstrap";
export const Planchoice = () => {
  return (
    <>
      <div className="main_plan">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 pt-3">
              <h2 className="plan_aa text-center"> choose your plan </h2>

              <Tabs
                defaultActiveKey="profile"
                className="d-flex justify-content-around tb plan-tab"
              >
                <Tab eventKey="home" title="Silver">
                  bhbh
                </Tab>
                <Tab eventKey="profile" title="Gold"></Tab>

                <Tab eventKey="men" title="Platinum"></Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
