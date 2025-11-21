import { useParams } from "react-router-dom";
import { useContext } from "react";
import ColorContext from "../contexts/color";

const data = {
  velopert: {
    name: '김민준',
    description: '리액트 개발자',
  },
  gildong: {
    name: '홍길동',
    description: '고전 소설 주인공'
  },
};

const Profile = () => {
  const params = useParams();
  const { state } = useContext(ColorContext);
  const profile = data[params.username];
  
  return (
    <div>
      <h1>프로필</h1>
      <div style={{width:'64px',
      height:'64px',
      background:state.color}}/>
    </div>
  )
}

export default Profile;