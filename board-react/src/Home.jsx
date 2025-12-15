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
        <div style={{
            width: "900px",
            margin: "0 auto",
            padding: "40px 20px",
            background: "white",
            color: "#222",
            fontFamily: "Inter, Pretendard, sans-serif"
        }}>
            <h1 style={{
                textAlign: "center",
                marginBottom: "30px",
                fontSize: "32px",
                fontWeight: "600"
            }}>
                Board Home
            </h1>

            {/* Top Navigation */}
            <div style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "10px",
                marginBottom: "25px"
            }}>
                {logged ? (
                    <>
                        <button style={btnWhite} onClick={doLogout}>
                            로그아웃
                        </button>

                        <NavLink to="/writing" style={btnBlack}>
                            글쓰기
                        </NavLink>
                    </>
                ) : (
                    <>
                        <NavLink to="/login" style={btnBlack}>
                            로그인
                        </NavLink>

                        <NavLink to="/signup" style={btnWhite}>
                            회원가입
                        </NavLink>
                    </>
                )}
            </div>

            {/* Table */}
            <table style={{
                width: "100%",
                borderCollapse: "collapse",
                borderRadius: "12px",
                overflow: "hidden",
                background: "white",
                border: "1px solid #e5e5e5"
            }}>
                <thead>
                    <tr style={{ background: "#fafafa" }}>
                        <th style={thStyle}>제목</th>
                        <th style={thStyle}>작성자</th>
                        <th style={thStyle}>내용</th>
                    </tr>
                </thead>
                <tbody>
                    {boards.map((board, index) => (
                        <tr key={index} style={{
                            textAlign: "center",
                            background: index % 2 === 0 ? "white" : "#fcfcfc"
                        }}>
                            <td style={tdStyle}>{board.title}</td>
                            <td style={tdStyle}>{board.writer}</td>
                            <td style={tdStyle}>{board.content}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

/* --- Styles --- */

const btnWhite = {
    padding: "8px 16px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    background: "white",
    color: "#333",
    fontSize: "14px",
    textDecoration: "none",
    cursor: "pointer"
};

const btnBlack = {
    padding: "8px 16px",
    borderRadius: "8px",
    background: "#111",
    color: "white",
    fontSize: "14px",
    textDecoration: "none",
    border: "1px solid #111",
    cursor: "pointer"
};

const thStyle = {
    padding: "14px 10px",
    borderBottom: "1px solid #e5e5e5",
    fontWeight: "600",
    fontSize: "15px",
    color: "#444"
};

const tdStyle = {
    padding: "12px 10px",
    borderBottom: "1px solid #f0f0f0",
    fontSize: "14px",
    color: "#555"
};