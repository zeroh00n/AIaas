import { useState, useEffect } from "react";

const Info = () =>{
    const[name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    useEffect(() => {
        console.log('렌더링 완료');
        console.log(
            {name, nickname}
        );
    },[nickname]); //useEffect는 []를 적지 않으면 콘솔로그는 값이 바뀔때마다 나오게 된다 [nickname]을 넣어줘 nickname이 바뀔때만 바꿀 수 있게 해주었다. 
    //useEffect에서 값을 바꾸는 코드를 넣으면 무한루프가 일어나며 리액트가 컴파일 오류를 낸다.

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return(
        <div>
            <div>
                <input value={name} onChange={onChangeName}/><br/>
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <div>
                    <b>이름:</b>{name}
                </div>
                <div>
                    <b>닉네임:</b>{nickname}
                </div>
            </div>
        </div>
    );
};
export default Info