import { useNavigate, Outlet } from "react-router-dom";

const Layout = () =>{
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const goAricles = () =>{
        navigate('/articles');
    };
    return(
        <div>
            <button onClick={goBack}>뒤로가기</button>
            <button onClick={goAricles}>게시글 목록</button>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
export default Layout