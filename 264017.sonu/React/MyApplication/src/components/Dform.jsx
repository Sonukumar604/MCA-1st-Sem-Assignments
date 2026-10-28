import { useRef, useState } from "react";

function Dform() {
  const name=useRef("")
  const [submittedName, setSubmittedName] = useState("");
//   const [lname, setlname] = useState("");
//   const [submittedlName, setSubmittedlName] = useState("");
  

  function handleSubmit(e) {
    e.preventDefault();
    // setSubmittedName(name);
    
    // setSubmittedlName(lname);
    setSubmittedName(name.current.value);

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={name}
          
          placeholder="Enter your name"
        />

        <button type="submit">Submit</button>
      </form>


      {/* <form onSubmit={handleSubmit}>
        <input
          value={lname}
          onChange={(e) => setlname(e.target.value)}
          placeholder="Enter your last name"
        />
        
        <button type="submit">Submit</button>
      </form> */}
            <h2>Submitted Name: {submittedName}</h2>
      {/* <h2>Submitted Name: {submittedlName}</h2> */}
    </div>
    
  );
}

export default Dform;