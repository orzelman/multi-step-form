import React from "react";
import Pick from "../components/Pick";

export default function AddOns(props) {
  function handleClickNav(nrPage) {
    props.setCurrentPage(nrPage);
  }
  function handleChange(pickId) {
    pickId.selected = !pickId.selected;
  }
  return (
    <div className="container">
      <header>
        <h2>Pick add-ons</h2>
        <p className="gray">Add-ons help ehance your gaming experience.</p>
        <form>
          {props.adds.map((add, index) => {
            return (
              <Pick
                key={index}
                add={add}
                handleChange={handleChange}
                monthly={props.monthly}
              />
            );
          })}
        </form>
      </header>
      <nav>
        <div onClick={() => handleClickNav(2)}>Go Back</div>
        <div className="button-next" onClick={() => handleClickNav(4)}>
          Next Step
        </div>
      </nav>
    </div>
  );
}
