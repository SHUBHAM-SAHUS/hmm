import React from "react";
import "../style/form//pro.scss";
import industry from "../images/industry.png";
import { Form } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";

export const Profileinput = () => {
  return (
    <>
     <div className="">
       <div className="row no-gutters">
         <div className="col-12 col-lg-4">
         <div className="">
        <div className="d-flex justify-content-center text-center">
          <div>
            <img
              src="https://image.shutterstock.com/image-vector/user-icon-260nw-523867123.jpg"
              alt="img"
              width="100%"
            />
            <h2 className=" p-0 m-0"> swiggy</h2>
            <p className="p-0 m-0"> london </p>

            <div className="mt-5">
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1 ">
                  <Form.Label className="d-flex justify-content-start llbl">
                    {" "}
                    <img
                      src={industry}
                      alt="industry"
                      width="16px"
                      className="mr-1"
                    />{" "}
                    industry setup
                  </Form.Label>
                  <Form.Control as="select">
                    <option> industry setup</option>
                    <option>2</option>
                  </Form.Control>
                </Form.Group>
                    
                    <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label className="d-flex justify-content-start llbl">
                     <AiOutlineHome className="iconn_pro mr-1"/>
                    address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label className="text-left">contact number</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label className="text-left">email id</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label className="text-left">contact person</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label className="text-left">job title</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group
                  controlId="exampleForm.ControlSelect1"
                  class="f-flex"
                >
                  <Form.Label className="text-left">job title</Form.Label>
                  <Form.Control type="email" placeholder="vb" /> to
                  <Form.Control type="email" placeholder="vb" />
                </Form.Group>
              </Form>
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
