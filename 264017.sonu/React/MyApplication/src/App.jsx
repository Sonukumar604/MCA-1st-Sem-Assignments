
import MyProfile from "./components/MyProfile"

function App(){
const details={
  name:"Sonu kumar",
  class:"MCA",
  college:"MAIMT"
};
const subjects=["JAVA", "DS", "CST"];

  return (
    <>
      
    <MyProfile  studentDetails={details} skills={subjects}/>
      <h1> This is my first App</h1>
    </>
  )
}


export default App
