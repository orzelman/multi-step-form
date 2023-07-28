import React from "react";

export default function Finishing(props) {
  // let total = 0
  const planCost = () => {
    switch (props.plan) {
      case "arcade":
        return props.monthly ? 9 : 90;
      case "advanced":
        return props.monthly ? 12 : 120;
      case "pro":
        return props.monthly ? 15 : 150;
    }
  };
  let total = planCost();
  console.log("adds array: ",Array.isArray(props.adds))


  props.adds.forEach(add => {
    if (add.selected) {
      if (props.monthly) {
        console.log("cost.monthly = ",add.cost.monthly)
        total += add.cost.monthly;
      } else {
        total += add.cost.yearly;
      }
    }
    console.log("total = ", total);
  })

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
              <h4>${planCost()}/{props.monthly? "mo" : "ye"}</h4>
            </div>
          </div>
          <hr></hr>
          {props.adds.map((add, index) => {
            return (
              <div className="summary-plan" key={index}>
                {add.selected ? (
                  <>
                    <p className="gray">{add.name}</p>
                    <p>
                      {props.monthly
                        ? `+$${add.cost.monthly}/mo`
                        : `+$${add.cost.yearly}/ye`}
                    </p>
                  </>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        <div className="summary-plan">
          <p className="gray" style={{ padding: "15px 0" }}>
            Total {props.monthly ? "(per month)" : "(per year)"}
          </p>
          <h3>
            +${total}/{props.monthly ? "mo" : "ye"}
          </h3>
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
