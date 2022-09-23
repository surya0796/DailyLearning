import { useState } from 'react';
import { Select } from './Select';

const options = [
  {label:"first",value:1},
  {label:"second",value:2},
  {label:"third",value:3},
  {label:"fourth",value:4},
  {label:"five",value:5}
]

function App() {
  const [value] = useState({
    label:"",
    value:""
  })

  const selectFunc = () => {

  }
  return (
    <Select options={options} onChange={selectFunc} value={value}/>
  );
}

export default App;
