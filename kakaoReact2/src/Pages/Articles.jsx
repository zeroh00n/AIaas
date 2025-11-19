import {Link, Outlet} from 'react-router-dom'

const Articles = ()=>{
    return(
        <ul>
            <Outlet /> {/* Outlet을 이용해 게시글을 눌렀을 때 목록이 사라지지 않고 목록 링크를 보여줄 수 있다 */}
            <li>
                <Link to="/articles/1">게시글 1</Link>
            </li>
            <li>
                <Link to="/articles/2">게시글 2</Link>
            </li>
            <li>
                <Link to="/articles/3">게시글 3</Link>
            </li>
        </ul>
    )
}
export default Articles