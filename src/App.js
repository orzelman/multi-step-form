import React, { useState } from "react";
import Steps from "./components/Steps";
import Section from "./components/Section";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="App">
      <main>
        <aside>
          <Steps currentPage={currentPage} />
        </aside>
        <section>
          <Section currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </section>
      </main>
    </div>
  );
}

export default App;
