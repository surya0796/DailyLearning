import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { counterDecrement, counterIncrement } from '../../redux/actions/counter.action';

type counterState = {
    counterReducer: number
  }

const Counter = () =>{
    const counter = useSelector((state:counterState) => state.counterReducer)
    const dispatch = useDispatch()
    return (
        <>
         <div className="App">
          <div>{counter}</div>
          <button onClick={() => dispatch(counterIncrement(1))}>Add</button>
          <button onClick={() => dispatch(counterDecrement(1))}>Del</button>
        </div>
        </>
    )
}

export default Counter