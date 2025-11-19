import {Link, Outlet} from "react-router-dom";

function Nav(){
    return(
        <div>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profiles/:username">프로필</Link>
                </li>
                <li>
                    <Link to="/person">인물 정보</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}
export default Nav