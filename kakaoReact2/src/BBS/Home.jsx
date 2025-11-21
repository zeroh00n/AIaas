import { Outlet, Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const data = [
    {num:1, title:"a", author:"a", count:1, like:1},
    {num:2, title:"b", author:"b", count:2, like:2},
    {num:3, title:"c", author:"c", count:3, like:3},
  ]
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Home</h1>
        <div className = "header-links">
          <div className="write-btn-wrap">
          <Link className="write-btn" to="signin">로그인</Link>
          <Link className="write-btn" to="signup">회원가입</Link>
        </div>
        </div>
      </header>

      <table className="board-table">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>조회수</th>
            <th>좋아요</th>
          </tr>
        </thead>
        <tbody>
          {data.map((x)=>(
            <tr key={x.num}>
              <td>{x.num}</td>
              <td>{x.title}</td>
              <td>{x.author}</td>
              <td>{x.count}</td>
              <td>{x.like}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="write-btn-wrap">
        <Link className="write-btn" to="write">글쓰기</Link>
      </div>

      <Outlet />
    </div>
  );
};

export default Home;
