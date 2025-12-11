import axios from 'axios';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
    const [logged, setLogged] = useState(false);
    const [boards, setBoards] = useState([]);
    
    const doLogout = async() => {
        const res = await axios.get('http://127.0.0.1:8000/logout', {withCredentials: true})
        setLogged(false);
    };

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/boards")
        .then(res => setBoards(res.data))
    }, [])
    
    const checkUser = async() => {
        try{
            const res = await axios.get('http://127.0.0.1:8000/checkLogin', {withCredentials: true})
            if(res.data.result === "ok"){
                setLogged(true);
            }
        }catch(error){
            console.log(error);
        }
    }
    useEffect(() => {
        checkUser();
    }, []);

    return (
        <>
            <h1>Home</h1>
            {console.log(boards)}
            <table>
                <thead>
                    <tr><td>title</td><td>writer</td><td>content</td></tr>
                </thead>
                <tbody>
                    {boards.map((board=>
                    <tr><td>{board.title}</td><td>{board.writer}</td><td>{board.content}</td></tr>
                    ))}
                </tbody>
            </table>
            {console.log("logged =", logged)}
            {logged ? <><button onClick={doLogout}>Logout</button><NavLink to="/writing">write</NavLink></> : 
                <><NavLink to="/login">Login</NavLink><NavLink to="/signup">Signup</NavLink></>}
        </>
    );
}