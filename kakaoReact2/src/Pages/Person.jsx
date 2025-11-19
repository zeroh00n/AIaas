import { useSearchParams } from "react-router-dom";

function Person(){
    const[x, setx] = useSearchParams()
    const name = x.get('name')
    const job = x.get('job')
    const city = x.get('city')
    const age = x.get('age')

    return(
        <div>
            <p>name : {name}</p>
            <p>job : {job}</p>
            <p>city : {city}</p>
            <p>age : {age}</p>
        </div>
    )
}
export default Person