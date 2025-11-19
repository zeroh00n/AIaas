import { useState } from "react";

function Check(){
    const[favorite, setFavorite] = useState({society:false, economy:false, culture:false})
    const doChange = e=>{
        setFavorite(prev=>({
            ...prev, 
            [e.target.name]:e.target.checked
        }))
    }
    return(
        <>            
            <input type = "checkbox" name="society" checked={favorite.society}
            onChange={doChange}/>society <br/>
            <input type = "checkbox" name="economy" checked={favorite.economy}
            onChange={doChange}/>economy <br/>
            <input type = "checkbox" name="culture" checked={favorite.culture}
            onChange={doChange}/>culture<br/>
            <div>society:{favorite.society.toString()}</div>
            <div>economy:{favorite.economy.toString()}</div>
            <div>culture:{favorite.culture.toString()}</div>
        </>    )
}
export default Check;