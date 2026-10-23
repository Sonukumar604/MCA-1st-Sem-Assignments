
import { ConditionalRenedering }  from "./components/ConditionalRendering";
import MyProfile from "./components/MyProfile"

function App(){
const details={
  name:"Sonu kumar",
  class:"MCA",
  college:"MAIMT"
};
const subjects=["JAVA", "DS", "CST"];
let students=[
    {id:1, name:"sonu", rollno:"17", class:"MCA"},
    {id:2, name:"sweta", rollno:"18", class:"BCOM"},
    {id:3, name:"khushi", rollno:"19", class:"BBA"},
    {id:4, name:"khushpreet", rollno:"20", class:"BTECH"},
    {id:5, name:"supriya", rollno:"21", class:"BCA"},
]  


  return (
    <div>
      <ul>
        <li>
          <MyProfile  studentDetails={details} skills={subjects}/>
      <h1> This is my first App</h1>
    
      
        </li>
      </ul>
      <ConditionalRenedering/>
      
    </div>
  )
}


export default App
