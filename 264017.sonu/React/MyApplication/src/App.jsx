
import MyProfile from "./components/MyProfile"

function App(){
const details={
  nameOfTeacher:"Sonu kumar",
  class:"MCA",
  college:"MAIMT"
};
let subjects=["JAVA", "DS", "CST"];

  return (
    <>
      
    <MyProfile  studentDetails={details} skils={subjects}/>
      <h1> This is my first App</h1>
    </>
  )
}


export default App
