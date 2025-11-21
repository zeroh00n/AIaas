import './Write.css';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";


export default function Write() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/view", {state:{title, author, content}});
  };

  const handleReset = () => {
    setTitle('');
    setAuthor('');
    setContent('');
  };


  return (
    <div>
        <div className="write-top-nav">
                <Link className="home-btn" to="/">홈으로</Link>
        </div>
    <div className="write-container">
      <div className="input-group">
        <label>제목</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>작성자</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>내용</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div className="button-group">
        <button onClick={handleSubmit} className="btn submit-btn">글 등록</button>
        <button onClick={handleReset} className="btn reset-btn">비우기</button>
      </div>
    </div>
    </div>
  );
}
