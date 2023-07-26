import React from "react";

export default function Finishing(props) {
  console.log(props.adds);
  function handleClickNav(nrPage) {
    props.setCurrentPage(nrPage);
  }
  function handleClickChange() {
    props.setCurrentPage(2);
  }

  return (
    <div className="container">
      <header>
        <h2>Finishing up</h2>
        <p className="gray">
          Double-check everything looks OK before confirming.
        </p>
        <div className="summary-array">
          <div className="summary-plan">
            <div className="summary-plan-left">
              <h4 style={{ textTransform: "capitalize" }}>
                {props.plan}
                {props.monthly ? "(Monthly)" : "Yearly"}
              </h4>
              <p className="anchor" onClick={handleClickChange}>
                Change
              </p>
            </div>
            <div className="summary-plan-right">
              <h4>$9/mo</h4>
            </div>
          </div>
          <hr></hr>
        </div>
      </header>
      <nav>
        <div onClick={() => handleClickNav(3)}>Go Back</div>
        <div className="button-next" onClick={() => handleClickNav(3)}>
          Confirm
        </div>
      </nav>
    </div>
  );
}
