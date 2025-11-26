import { useState } from "react";

function Header(props){
    return <header>
        <h1><a href="/" 
        onClick={(e)=>{
            e.preventDefault();
            props.onChangeMode();
        }}>{props.title}</a></h1>
    </header>
}
function Nav(props){
    const lis =[];
    props.topics.map((t) =>(
        lis.push(<li key={t.id}>
            <a key={t.id} href={'/read/' + t.id} onClick={(e)=>{
                e.preventDefault();
                props.onChangeMode(t.id);
            }}>{t.title}</a>
            </li>)
    ))
    return <nav>
        <ol>
            {lis}
        </ol>
    </nav>
}
function Article(props){
    return <article>
        <h2>{props.title}</h2>
        {props.body}
    </article>
}
function Ex1(){
    const [mode, setMode]  = useState('Welcome');

    const topics =[
        {id:1, title:'html', content:'html is...'},
        {id:2, title:'css', content:'css is...'},
        {id:3, title:'java', content:'java is...'}
    ]

    let content = '';
    
    if(mode === 'Welcome'){
        content = <Article title={"Welcome"} body="Hello, WEB"></Article>
    }else if(mode === 'Read'){
        content = <Article title="Read" body="Hello, Read"></Article>
    }
    return(
        <div>
            <Header title="React" onChangeMode={()=>{
                setMode('Welcome');
            }}></Header>
            <Nav topics={topics} onChangeMode={(id)=> {setMode('Read')}}></Nav>
            {content}
        </div>
    )
}export default Ex1