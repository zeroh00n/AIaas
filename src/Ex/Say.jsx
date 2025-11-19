import { useState, version } from "react"

function Say(){
    const[mobile, setMobile] = useState('');
    const[verium, toVerium] = useState('');
    
    return (
        <div>
             번호: <input type="text" value={mobile}
             onChange={(e)=>setMobile(e.value)}/>
             인증번호: <input type="text" value = {verium}
             onChange={(e)=>toVerium(e.value)} />
             {/* <button onClick={} /><br></br>
             Result <input type="text" value={}/> */}
        </div>
    )
}

export default Say