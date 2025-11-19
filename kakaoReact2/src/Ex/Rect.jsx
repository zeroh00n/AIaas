export default function Rect(props){
    const config={
        width:'200px',
        height:'100px', 
        backgroundColor: props.color
    }
    return <div style={config}></div>
}