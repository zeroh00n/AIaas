import { useReducer } from "react";

function reducer(state, action){
    if(actoin.type === 'INNREMENT'){
        return{value:state.value+1}
    } else if(actoin.type === 'DECREMENT'){
        return{value:state.value-1}
    }
    const Counter = () =>{
        const[x,dispatch] = useReducer(reducer, {value:0})
    }

    return(
        <div>
            <p>
                현재 카운터 값은 = <b>{x}</b>
            </p>
            <button onClick={()=>dispatch({type: 'INCREMENT'})}>+</button>
            <button onClick={()=>dispatch({type: 'DECREMENT'})}>-</button>
        </div>
    )
}
// export default Counter;