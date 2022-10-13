
import { useNavigate } from 'react-router-dom';
export const Confirmation = () => {
    const navigate = useNavigate()
  return (
    <>
        <div>Order Confirmed</div>
        <button onClick={()=>navigate(-1)}>{"<--"}</button>
    </>
  )
}
