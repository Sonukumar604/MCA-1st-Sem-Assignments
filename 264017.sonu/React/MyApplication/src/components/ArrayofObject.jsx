function arrayofObject(){
  

    return(
        <>
       {students.map((students)=>{
        <div key={students.id}>
            <h3>{students.name}</h3>
            <h3>{students.age}</h3>
        </div>
       })}
        </>
       
    )
}
export default ArrayofObject