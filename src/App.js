import React, { useState } from "react";
import adds from "./adds.json";
import Steps from "./components/Steps";
import Section from "./components/Section";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [plan, setPlan] = useState("");
  const [monthly, setMonthly] = useState(true);

  return (
    <div className="App">
      <main>
        <Steps currentPage={currentPage} />
        <Section
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          monthly={monthly}
          setMonthly={setMonthly}
          plan={plan}
          setPlan={setPlan}
          adds={adds}
        />
      </main>
    </div>
  );
}

export default App;
