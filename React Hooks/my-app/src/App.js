import './App.css';
import UseCallback from './components/UseCallback';
import UseContext from './components/UseContext';
import UseEffect from './components/UseEffect';
import UseImperativHandle from './components/UseImperativeHandle';
import UseLayOutEffect from './components/UseLayOutEffect';
import UseMemo from './components/UseMemo';
import UseReducer from './components/UseReducer';
import UseRef from './components/UseRef';
import { UseState } from './components/UseState';

function App() {
  return (
    <>
      {/* <UseState />
      <UseReducer/>
      <UseEffect/>
      <UseRef/>
      <UseLayOutEffect/>
      <UseImperativHandle/> */}
      <UseContext/>
      <UseMemo/>
      <UseCallback/>
    </>
  );
}

export default App;