import './App.css';
import UseEffect from './components/UseEffect';
import UseReducer from './components/UseReducer';
import UseRef from './components/UseRef';
import { UseState } from './components/UseState';

function App() {
  return (
    <>
      <UseState />
      <UseReducer/>
      <UseEffect/>
      <UseRef/>
    </>
  );
}

export default App;