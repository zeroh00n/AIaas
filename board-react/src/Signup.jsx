import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
    const initValue = {loginid: '', password: ''};
    const navigate = useNavigate();
    const [user, setUser] = useState(initValue);

    const doChange = (e) => {
        const {name, value} = e.target;
        setUser(prev => ({...prev, [name]: value}));
    }
    const doSignup = async() => {
        try{
            const res = await axios.post('http://127.0.0.1:8000/signup', user, {withCredentials: true});
            console.log(res.data)
            if(res.data.result === "ok"){
                alert("signup success");
                navigate("/login")
            } else {
                alert("signup fail")
                setUser(initValue)
            }
        } catch(error){
            console.log(error)
        }
    }
    const doCancel = async () => {
        await axios.get("http://127.0.0.1:8000/logout", { withCredentials: true });

        setUser(initValue);
        navigate('/');
    }
    return (
        <div>
            <table style={{margin: '0 auto'}}>
                <tbody>
                    <tr>
                        <td>Login ID</td><td><input type="text" name="signupid" onChange={doChange} value={user.loginid}/></td>
                    </tr>
                    <tr>
                        <td>Password</td><td><input type="password" name="password" onChange={doChange} value={user.password} /></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button onClick={doSignup}>Signup</button>
                            <button onClick={doCancel}>Cancel</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}