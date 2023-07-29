import React from "react";
import imgOk from "../images/icon-thank-you.svg";

export default function Thankyou() {
  return (
    <div className="center-div">
      <img src={imgOk} alt="image-ok" style={{padding: "30px"}}/>
      <h2>Thank you</h2>
      <p className="gray" style={{textAlign:"center"}}>
        Thanks for confirmation your subscription! We hope you have fun using
        our platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
}
