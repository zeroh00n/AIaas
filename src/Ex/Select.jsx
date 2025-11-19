import { useState } from "react";

function Select(){
const [favorite, setFavorite] = useState([])
const doChange = e =>{
    const values = Array.from(e.target.selectedOptions, option=>option.value)
    setFavorite(values);
}
const fruit=['apple', 'grape', 'watermelon']
return(
    <>
        <select value={favorite} onChange={doChange} size = {fruit.length} multiple>
            {fruit.map(x => <option value={x}>{x}</option>)}
        </select><br/><br/>
        <div>
            선택한 과일:{favorite.join(',')}
        </div>
    </>
)

} 
export default Select;