import { useState } from "react";

function Radio(){
    const[gender, setGender] = useState('')
    const doChange = e =>{
        setGender(e.target.value)
    }
    return(
        <>
            <input type="radio" name="gender" value="male" checked={gender=="male"}
            onChange={e=>doChange(e)} />male <br/>

            <input type="radio" name="gender" value="female" checked={gender=="female"}
            onChange={e=>doChange(e)} />female<br/>

            <label>{gender}</label>
        </>
    )
}
export default Radio;