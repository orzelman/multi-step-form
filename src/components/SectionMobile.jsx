import React from "react";
import PersonalInfo from "../pages/PersonalInfo";
import SelectPlan from "../pages/SelectPlan";
import AddOns from "../pages/AddOns";
import Finishing from "../pages/Finishing";
import Thankyou from "../pages/Thankyou";

export default function SectionMobile(props) {
  return (
    <div className="container-mobile">
      <div className="logo-mobile"></div>
      <div className="steps-mobile">
        <ul className="ul-mobile">
          <li
            className={`list-digit ${props.currentPage === 1 ? "active" : ""}`}
          >
            1
          </li>
          <li
            className={`list-digit ${props.currentPage === 2 ? "active" : ""}`}
          >
            2
          </li>
          <li
            className={`list-digit ${props.currentPage === 3 ? "active" : ""}`}
          >
            3
          </li>
          <li
            className={`list-digit ${
              props.currentPage === 4 || props.currentPage === 5 ? "active" : ""
            }`}
          >
            4
          </li>
        </ul>
      </div>
      <div className="main-mobile">
        {props.currentPage === 1 && (
          <PersonalInfo
            setCurrentPage={props.setCurrentPage}
            monthly={props.monthly}
            setMonthly={props.setMonthly}
            personalInfo={props.personalInfo}
            setPersonInfo={props.setPersonInfo}
          />
        )}
        {props.currentPage === 2 && (
          <SelectPlan
          setCurrentPage={props.setCurrentPage}
          monthly={props.monthly}
          setMonthly={props.setMonthly}
          plan={props.plan}
          setPlan={props.setPlan}
          />
        )}
        {props.currentPage === 3 && (
          <AddOns
          setCurrentPage={props.setCurrentPage}
          monthly={props.monthly}
          setMonthly={props.setMonthly}
          adds={props.adds}
          setAdds={props.setAdds}
          />
        )}
        {props.currentPage === 4 && (
          <Finishing
          setCurrentPage={props.setCurrentPage}
          plan={props.plan}
          monthly={props.monthly}
          adds={props.adds}
          />
        )}
        {props.currentPage === 5 && (
          <Thankyou
          />
        )}
      </div>
    </div>
  );
}
