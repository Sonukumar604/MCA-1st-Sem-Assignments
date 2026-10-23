function arrayofObject(){
  

    return(
        <>
        <style>
            {
                `
                h3{
                color:"blue;
                font-size: 30px;
                }
                `
            }
        </style>
       {students.map((students)=>{
        <div key={students.id}>
            <h1 style={{color:"red"}} >Name</h1>
            <h3>{students.name}</h3>
            <h3>{students.age}</h3>
        </div>
       })}
        </>
       
    )
}
export default ArrayofObject