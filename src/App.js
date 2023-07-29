import React, { useState, useEffect } from "react";
import data from "./adds.json";
import Steps from "./components/Steps";
import Section from "./components/Section";

function App() {
  const [adds, setAdds] = useState(data)
  const [currentPage, setCurrentPage] = useState(1);
  const [plan, setPlan] = useState("");
  const [monthly, setMonthly] = useState(true);
  const [personalInfo, setPersonInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [mobileDesign, setMobileDesign] = useState(true)
  useEffect(() => {
    window.addEventListener('resize', () => {
      if(window.innerWidth > 576) {
        setMobileDesign(prev => prev=false)
      }
      else {
        setMobileDesign(prev => prev=true)
      }
    })
  }, [])

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
          setAdds={setAdds}
          personalInfo={personalInfo}
          setPersonInfo={setPersonInfo}
        />
      </main>
    </div>
  );
}

export default App;
