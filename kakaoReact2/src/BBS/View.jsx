import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";

export default function View(){
    const location = useLocation();
    const {title, author, content} = location.state;
    return(
        <div>
            <div className="write-top-nav">
                <Link className="home-btn" to="/">홈으로</Link>
        </div>
            <h2>제목  {title}</h2>
            <p>작성자 {author}</p>
            <p>내용<br />{content}</p>

            <button>삭제</button>
            <button>수정</button>
        </div>
    )
}