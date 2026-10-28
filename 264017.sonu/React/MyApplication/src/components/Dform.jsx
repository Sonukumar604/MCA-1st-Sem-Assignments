import { useState } from "react";

function Dform() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [lname, setlname] = useState("");
  const [submittedlName, setSubmittedlName] = useState("");
  const studentName= useRef();

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedName(name);
    
    setSubmittedlName(lname);
    setResult(studentName.current.value);

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <button type="submit">Submit</button>
      </form>


      <form onSubmit={handleSubmit}>
        <input
          value={lname}
          onChange={(e) => setlname(e.target.value)}
          placeholder="Enter your last name"
        />
        
        <button type="submit">Submit</button>
      </form>
            <h2>Submitted Name: {submittedName}</h2>
      <h2>Submitted Name: {submittedlName}</h2>
    </div>
    
  );
}

export default Dform;