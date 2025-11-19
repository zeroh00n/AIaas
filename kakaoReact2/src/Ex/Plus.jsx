import { useState } from "react";

function Plus(){
    const[form, setForm] = useState({
        a:'',
        b:'',
        resulst:''
    });
    const doChange = (e) => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm)
    };

    const setResult= () => {
        const temp = {
            ...form,
            resulst:parseInt(form.a)*parseInt(form.b)
        } 
        setForm(temp)   
    }
    
    return(
        <>
        a<input type="text" name="a" value={form.a} onChange={doChange}/><br/>
        b<input type="text" name="b" value={form .b} onChange={doChange}/><br/>
        <button onClick={()=>setResult()}>*</button>        
        r<input type="text" name="result" value={form.resulst}/>
        </>
    )
    // const[a, setNum1] = useState(0);    
    // const[b, setNum2] = useState(0);
    // const[result, setResult] = useState(0);
    // const doplus = () => {setResult(parseInt(a)+parseInt(b))}

    // return(
    //     <div>
    //         a: <input type="text" value={a}
    //         onChange={e => setNum1(e.target.value)} /><br/>
    //         b: <input type="text" value={b}
    //         onChange={e => setNum2(e.target.value)} /><br/>
    //         <button onClick={doplus}>+</button>
    //         result: {result}
    //     </div>
    // )
}
export default Plus