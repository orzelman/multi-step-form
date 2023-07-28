import React, { useState } from "react";
import PersonalInfo from "../pages/PersonalInfo";
import SelectPlan from "../pages/SelectPlan";
import AddOns from "../pages/AddOns";
import Finishing from "../pages/Finishing";

export default function Section(props) {

  return (
    <>
      {props.currentPage === 1 ? (
        <PersonalInfo
          setCurrentPage={props.setCurrentPage}
          monthly={props.monthly}
          setMonthly={props.setMonthly}
          personalInfo={props.personalInfo}
          setPersonInfo={props.setPersonInfo}
        />
      ) : (
        ""
      )}
      {props.currentPage === 2 ? (
        <SelectPlan
          setCurrentPage={props.setCurrentPage}
          monthly={props.monthly}
          setMonthly={props.setMonthly}
          plan={props.plan}
          setPlan={props.setPlan}
        />
      ) : (
        ""
      )}
      {props.currentPage === 3 ? (
        <AddOns
          setCurrentPage={props.setCurrentPage}
          monthly={props.monthly}
          setMonthly={props.setMonthly}
          adds={props.adds}
          setAdds={props.setAdds}
        />
      ) : (
        ""
      )}
      {props.currentPage === 4 ? (
        <Finishing
          setCurrentPage={props.setCurrentPage}
          plan={props.plan}
          monthly={props.monthly}
          adds={props.adds}
        />
      ) : (
        ""
      )}
    </>
  );
}
