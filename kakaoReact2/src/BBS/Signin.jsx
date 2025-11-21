import { Link } from 'react-router-dom';
import './Signin.css';

export default function Signin(){
    return(
    <div className="signin-container">
        <h3>로그인</h3>
        <form>
            <input type="text" name="id" placeholder="아이디"/>
            <input type="password" name="pw" placeholder="비밀번호"/>
        </form>

        <div className="signin-buttons">
            <button onClick={(e)=> console.log("로그인")}>로그인</button>
            <button onClick={(e)=> console.log("취소")}>취소</button>
        </div>

        <div className="signin-footer">
            <Link className="write-btn" to="/">홈으로</Link>
            <Link className="write-btn" to="signup">회원가입</Link>
        </div>
    </div>
    )
}
