import './App.scss';
import dateSlice from './state/reducer/dateSlice';
import Store from './state/Store';
import {useDispatch, useSelector} from 'react-redux';

function App() {
  const today =   useSelector(s=>s.date.date)
  // Store.dispatch(dateSlice.actions.test())
  const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {
          // Store.getState().date.date
          today
          }
        </a>
      </header>
      <button onClick={()=>{
        dispatch(dateSlice.actions.test())
        console.log(
          Store.getState().date.date)
      }} > sdfdsaf </button>
     
     
    </div>
  );
}

export default App;
