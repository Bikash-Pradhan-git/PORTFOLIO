import React, { useEffect, useState } from "react";
import "../FirstComponent.css";
import Example from "./Example";
import Avatar from "@mui/material/Avatar";
import avatar from "../Abinash.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import XIcon from "@mui/icons-material/X";
import EmailIcon from "@mui/icons-material/Email";
export default function FourthHeader() {
  const [check, setCheck] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setCheck(true), 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.Fragment>
      <div className="First position-relative overflow-hidden p-3 p-md-5 mb-1 text-center">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row justify-content-around">
            <div className="col-12 col-md-8 col-lg-5 p-lg-5 mx-auto my-4 text-center">
              <Avatar
                alt="Remy Sharp"
                src={avatar}
                sx={{
                  width: { xs: 200, sm: 300, md: 400 },
                  height: { xs: 200, sm: 300, md: 400 },
                  margin: "auto",
                }}
              />
            </div>

            <div className="col-12 col-md-8 col-lg-5 p-lg-5 p-md-4 p-3 mx-auto my-4">
              <h1 className="display-4 display-md-5 display-sm-6 fw-normal">
                <Example text={`Bikash Pradhan`} speed={50} />
              </h1>
              {check ? (
                <Example
                  text={`And an even wittier subheading to boot. Jumpstart your marketing
          efforts with this example based on Apple’s marketing pages.`}
                  speed={50}
                />
              ) : (
                <></>
              )}

              <p className="lead fw-normal"></p>
              <p className="btn btn-outline-secondary">Connect With me</p>
              <ul
                className="d-flex justify-content-evenly"
                style={{ listStyle: "none" }}
              >
                <a href="1" style={{ textDecoration: "none", color: "white" }}>
                  <li>
                    <LinkedInIcon sx={{ color: "blue", fontSize: "50px" }} />
                  </li>
                </a>
                <a href="3" style={{ textDecoration: "none" }}>
                  <li>
                    <XIcon sx={{ color: "black", fontSize: "50px" }} />
                  </li>
                </a>
                <a href="2" style={{ textDecoration: "none" }}>
                  <li>
                    <EmailIcon sx={{ color: "white", fontSize: "50px" }} />
                  </li>
                </a>
                <a href="2" style={{ textDecoration: "none" }}>
                  <li>
                    <WhatsAppIcon sx={{ color: "green", fontSize: "50px" }} />
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>

        {/* Hide these on smaller screens for cleaner mobile view */}
        <div className="product-device shadow-sm d-none d-lg-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-lg-block"></div>
      </div>
    </React.Fragment>
  );
}
