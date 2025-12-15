import { useState} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useGloval } from "./store";

export default function Writing() {
    const userid = useGloval(x=>x.userid)
    const initValue = {title: '', content: '', writer:userid};
    const navigate = useNavigate();
    const [write, setWrite] = useState(initValue);
    
    const doChange = (e) => {
        const {name, value} = e.target;
        setWrite(prev => ({...prev, [name]: value}));
    }

    const doWrite = async() =>{
        try{
            const res = await axios.post('http://127.0.0.1:8000/writing', write, {withCredentials: true})
            if(res.data.result ==='ok'){
                alert("write success")
                navigate("/")
            } else{
                alert("write fail")
            }
        } catch(error){
            console.log(error)
        }
    }
    const doCancel = async () => {    
        setWrite(initValue);
        navigate('/');
    }
    const tds = {textAlign:"left"}

    return (
        <>
        <style>
            {`
                td {border:1px solid grey}
                table {margin:0 auto, borderCollapse:collapse}
            `}
        </style>
            <table>
                <tbody>
                    <tr>
                        <td>Title</td><td style={tds}><input type="text" name = "title" onChange={doChange} value ={write.title}/></td>
                    </tr>
                    <tr>
                        <td>content</td><td style={tds}><textarea name = "content" onChange={doChange} rows={10} cols={50}>{write.content}</textarea></td>
                    </tr>
                    <tr>
                        <td>writer</td><td style={tds}>{userid}</td>
                    </tr>
                    <tr>
                        <td colSpan={2} style={{textAlign:'center'}}>
                            <button onClick={doWrite}>write</button>
                            <button onClick={doCancel}>cancel</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}