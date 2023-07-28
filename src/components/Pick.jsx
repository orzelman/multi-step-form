import React from "react";

export default function Pick({ add, handleChange, monthly }) {
  return (
    <label htmlFor={add.id}>
      <div className={`pick-item ${add.selected? "active" : ""}`}>
        <div className="pick-left-side">
          <input
            type="checkbox"
            checked={add.selected}
            id={add.id}
            onChange={() => handleChange(add)
            }
          />
          <div className="pick-desription">
            <h4>{add.name}</h4>
            <p className="gray">{add.description}</p>
          </div>
        </div>
        <div className="pick-right-side">
          <p>
            {monthly ? `+$${add.cost.monthly}/mo` : `+$${add.cost.yearly}/ye`}
          </p>
        </div>
      </div>
    </label>
  );
}
