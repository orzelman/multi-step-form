export default function Steps({currentPage}) {
  console.log("current page = ", currentPage)
  return (
    <ul>
      <li>
        <div className={`list-digit ${currentPage===1? "active" : ""}`}>
          <span>1</span>
        </div>
        <div className="list-text">
          <p className="gray">STEP 1</p>
          <p className="list">YOUR INFO</p>
        </div>
      </li>
      <li>
      <div className={`list-digit ${currentPage===2? "active" : ""}`}>
          <span>2</span>
        </div>
        <div className="list-text">
          <p className="gray">STEP 2</p>
          <p className="list">SELECT PLAN</p>
        </div>
      </li>
      <li>
      <div className={`list-digit ${currentPage===3? "active" : ""}`}>
          <span>3</span>
        </div>
        <div className="list-text">
          <p className="gray">STEP 3</p>
          <p className="list">ADD-ONS</p>
        </div>
      </li>
      <li>
      <div className={`list-digit ${currentPage===4? "active" : ""}`}>
          <span>4</span>
        </div>
        <div className="list-text">
          <p className="gray">STEP 4</p>
          <p className="list">SUMMARY</p>
        </div>
      </li>
    </ul>
  );
}
