import { useDispatch,useSelector } from 'react-redux';
import {decrement} from "./actions/counter"
import './App.css';

function App() {

const dispatch=useDispatch();
const state = useSelector(state => state.counter);

  return (
    <div className="App">
      <button onClick={()=>dispatch(decrement())}>action</button>
      <p>this is the : {state}</p>
    </div>
  );
}

export default App;
