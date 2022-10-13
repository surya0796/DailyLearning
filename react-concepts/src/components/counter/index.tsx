import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { counterDecrement, counterIncrement } from '../../redux/actions/counter.action';

type counterState = {
    counterReducer: number
  }

const Counter = () =>{
    const counter = useSelector((state: counterState) => state.counterReducer)
    const dispatchIncrement = useDispatch()
    const dispatchDecrement = useDispatch()
    return (
        <>
         <div className="App">
          <div>{counter}</div>
          <button onClick={() => dispatchIncrement(counterIncrement(1))}>Add</button>
          <button onClick={() => dispatchDecrement(counterDecrement(1))}>Del</button>
        </div>
        </>
    )
}

export default Counter