import { useNavigate } from 'react-router-dom';
import Counter from '../../components/counter/index';

export const Home = () => {
  const navigate = useNavigate()
  return (
    <>
    <div>
      Home
      <Counter/>
      <button onClick={()=>navigate("order-summary")}>Submit</button>
    </div>
    </>
  )
}
