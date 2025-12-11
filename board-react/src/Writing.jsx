import { useState} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function Writing() {
    const initValue = {title: '', content: ''};
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

    return (
        <>
            title <input type="text" name = "title" onChange={doChange} value ={write.title}/>
            content <input type="text" name = "content" onChange={doChange} value ={write.content}/>
            <div>
                <button onClick={doWrite}>write</button>
                <button onClick={doCancel}>cancel</button>
            </div>
        </>
    )
}