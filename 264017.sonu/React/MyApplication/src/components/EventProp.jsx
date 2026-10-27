import React from 'react'

const EventProp = () => {
    const [fname, setfname] = useState();
    function changeName(e){
        setfname(e.target.value)
    }
  return (
    <>
        {fname}
        <input type = "text" name="txtname" value={fname} id="txtname" onChange={(e)=>{setfname(e.target.value)}}/>    </>
  )
}

export default EventProp
