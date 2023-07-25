import React, { useState } from "react";
import imgArcade from "../images/icon-arcade.svg";
import imgAdvanced from "../images/icon-advanced.svg";
import imgPro from "../images/icon-pro.svg";

export default function SelectPlan(props) {
  const [monthly, setMonthly] = useState(true);
  const [plan, setPlan] = useState("");

  function handleSwitch() {
    setMonthly((prev) => !prev);
    setPlan("");
  }

  function handleSelectTile(selectedPlan) {
    setPlan(selectedPlan);
  }

  function handleClickNav(nrPage) {
    props.setCurrentPage(nrPage);
  }

  return (
    <div>
      <h2>Select your plan</h2>
      <p className="gray">You have the option of monthly or yearly billing.</p>
      <form>
        <div className="select-tile">
          <div
            className={`tile ${plan === "arcade" ? "selected-tile" : ""}`}
            onClick={() => handleSelectTile("arcade")}
          >
            <img src={imgArcade} alt="Arcade plan" />
            <h3>Arcade</h3>
            <p className="gray">{monthly ? "$9/mo" : "$90/ye"}</p>
          </div>
          <div
            className={`tile ${plan === "advanced" ? "selected-tile" : ""}`}
            onClick={() => handleSelectTile("advanced")}
          >
            <img src={imgAdvanced} alt="Advanced plan" />
            <h3>Advanced</h3>
            <p className="gray">{monthly ? "$12/mo" : "$120/ye"}</p>
          </div>
          <div
            className={`tile ${plan === "pro" ? "selected-tile" : ""}`}
            onClick={() => handleSelectTile("pro")}
          >
            <img src={imgPro} alt="Pro plan" />
            <h3>Arcade</h3>
            <p className="gray">{monthly ? "$15/mo" : "$150/ye"}</p>
          </div>
        </div>
        <div className="switch-zone">
          <p>Monthly</p>
          <div className="switch" onClick={handleSwitch}>
            <div
              className={`switch-ball ${monthly ? "monthly" : "yearly"}`}
            ></div>
          </div>
          <p>Yearly</p>
        </div>
      </form>
      <nav>
          <div onClick={() => handleClickNav(1)}>Go Back</div>
          <div className="button-next" onClick={() => handleClickNav(3)}>
            Next Step
          </div>
        </nav>
    </div>
  );
}
