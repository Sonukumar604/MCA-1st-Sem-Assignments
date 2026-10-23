
import React from "react";
const ConditionalRenedering=()=>{
    let name="Hero"
    return(
        <div>
            {name == "Hero" ? <h1>{name}</h1>:alert("error")}
        </div>
    )

}
export {ConditionalRenedering};