import { useState } from "react";

function Signup() {
    const [info, setInfo] = useState({
        id:'',
        pw:'',
        pwre:'',
        gender:'',
        tel:'',
        region:'',
        like:[]
    });

    const doChange = (e) =>{
        const changeInfo = {
            ...info, 
            [e.target.name]: e.target.value
        };
        setInfo(changeInfo);
    };
    const checkboxInfo = (e) =>{
        const{ value, checked} = e.target;

        if(checked){      
            setInfo({
                ...info,
                like: [...info.like, value]
            });
        }else{
            setInfo({
                ...info,
                like:info.like.filter(item=> item !==value)
            });
        }
    };

    const resetInfo = () =>{
        setInfo({
            id:'',
            pw:'',
            pwre:'',
            gender:'',
            tel:'',
            region:'',
            like:[]
        });
    };
    
    return(
        <div>
            아이디 <input type="text" name ='id' value={info.id} onChange={doChange}/><br/>
            비밀번호 <input type="password" name = 'pw'value={info.pw} onChange={doChange}/><br/>
            비밀번호 확인 <input type="password" name = 'pwre' value={info.pwre} onChange={doChange}/><br/>
            성별 <input type= "radio" name="gender" value="male" checked={info.gender=="male"}
             onChange={e=>doChange(e)}/>남성
             <input type= "radio" name="gender" value="female" checked={info.gender=="female"}
             onChange={e=>doChange(e)}/>여성<br/>
            번호 <input type="text" name = 'tel' value={info.tel} onChange={doChange}/><br/>
             지역 
             <select name="region" value={info.region} onChange={doChange}>
                <option value='강원'>강원</option>
                <option value='경기'>경기</option>
                <option value='경북'>경북</option>
                <option value='서울'>서울</option>
             </select><br/>
             관심분야
             <input type = "checkbox" name="like" value="game" checked={info.like.includes("game")} onChange={checkboxInfo}/>game
             <input type = "checkbox" name="like" value="youtube"  checked={info.like.includes("youtube")} onChange={checkboxInfo}/>youtube
             <input type = "checkbox" name="like" value="running" checked={info.like.includes("running")} onChange={checkboxInfo}/>running
             <input type = "checkbox" name="like" value="webtoon" checked={info.like.includes("webtoon")} onChange={checkboxInfo}/>webtoon<br/><br/>
            <button onClick={()=>setInfo(info)}>확인</button>
            <button onClick={resetInfo}>비우기</button><br/><br/>

            <div>아이디: {info.id}</div>
            <div>비밀번호: {info.pw}</div>
            <div>비밀번호 확인: {info.pwre}</div>
            <div>성별: {info.gender}</div>
            <div>번호: {info.tel}</div>
            <div>지역: {info.region}</div>
            <div>관심분야: {info.like.map((likes, index)=> (
                <div key={index}>{likes}</div>
            ))}</div>
        </div>
    )
}
export default Signup;