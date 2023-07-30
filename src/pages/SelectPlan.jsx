import React from "react";
import plans from "../plans.json";
import imgArcade from "../images/icon-arcade.svg";
import imgAdvanced from "../images/icon-advanced.svg";
import imgPro from "../images/icon-pro.svg";

export default function SelectPlan(props) {
  function handleSwitch() {
    props.setMonthly((prev) => !prev);
    props.setPlan("");
  }

  function handleSelectTile(selectedPlan) {
    props.setPlan(selectedPlan);
  }

  function handleClickNav(nrPage) {
    if (props.plan === "" && nrPage === 3) return;
    props.setCurrentPage(nrPage);
  }

  return (
    <div className="container">
      <header>
        <h2>Select your plan</h2>
        <p className="gray">
          You have the option of monthly or yearly billing.
        </p>
        <form>
          <div className="select-tile">
            <div
              className={`tile ${
                props.plan === "arcade" ? "selected-tile" : ""
              }`}
              onClick={() => handleSelectTile("arcade")}
            >
              <img src={imgArcade} alt="Arcade plan" />
              <h3>Arcade</h3>
              <p className="gray">{props.monthly ? "$9/mo" : "$90/ye"}</p>
            </div>
            <div
              className={`tile ${
                props.plan === "advanced" ? "selected-tile" : ""
              }`}
              onClick={() => handleSelectTile("advanced")}
            >
              <img src={imgAdvanced} alt="Advanced plan" />
              <h3>Advanced</h3>
              <p className="gray">{props.monthly ? "$12/mo" : "$120/ye"}</p>
            </div>
            <div
              className={`tile ${props.plan === "pro" ? "selected-tile" : ""}`}
              onClick={() => handleSelectTile("pro")}
            >
              <img src={imgPro} alt="Pro plan" />
              <h3>Arcade</h3>
              <p className="gray">{props.monthly ? "$15/mo" : "$150/ye"}</p>
            </div>
          </div>
          <div className="switch-zone">
            <p>Monthly</p>
            <div className="switch" onClick={handleSwitch}>
              <div
                className={`switch-ball ${
                  props.monthly ? "monthly" : "yearly"
                }`}
              ></div>
            </div>
            <p>Yearly</p>
          </div>
        </form>
      </header>

      <nav>
        <div className="go-back" onClick={() => handleClickNav(1)}>
          Go Back
        </div>
        <div className="button-next" onClick={() => handleClickNav(3)}>
          Next Step
        </div>
      </nav>
      <div className="nav-mobile">
        <div className="nav-mobile-flex">
          <div className="button-back" onClick={() => handleClickNav(1)}>
            <p className="gray">Go Back</p>
          </div>
          <div className="button-next" onClick={() => handleClickNav(3)}>
            Next Step
          </div>
        </div>
      </div>
    </div>
  );
}
