import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useGloval } from './store';


export default function Login() {
    const [user, setUser] = useState({loginid: '', password: ''});
    const navigate = useNavigate();
    const {userid, setUserid} = useGloval()

    const doChange = (e) => {
        const {name, value} = e.target;
        setUser(prev => ({...prev, [name]: value}));
        //setUser({...user, [e.target.name]: e.target.value});
    }
    const doLogin = async() => {
        try{
            const res = await axios.post('http://127.0.0.1:8000/login', user, {withCredentials: true});
            console.log("이번에 받은 res =", res);
            console.log("이번에 받은 res.data =", res.data);
            if(res.data.result === 'success'){
                setUserid(user.loginid)
                navigate('/');
            }else{
                alert(res.data.message || 'Login failed');
            }
        }catch(error){
            console.log(error);
            alert('Login failed');
        }
    }
    const doCancel = async () => {
        await axios.get("http://127.0.0.1:8000/logout", {withCredentials: true});
        navigate('/');
    }

    return (
        <table>
            <tbody>
                <tr><td>Login ID</td><td><input type="text" name="loginid" onChange={doChange} value={user.loginid} /></td></tr>
                <tr><td>Password</td><td><input type="password" name="password" onChange={doChange} value={user.password} /></td></tr>
                <tr><td colSpan="2" align="center">
                    <button onClick={doLogin}>Login</button>
                    <button onClick={doCancel}>Cancel</button>
                </td></tr>
            </tbody>
        </table>
    );
}