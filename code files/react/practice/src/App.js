import './App.css';
import {useCallback, useEffect, useState} from "react";
import Button from './Button';
import Memo from './hooks/reactmemo/Memo';
import { Usememo } from './hooks/usememo/Usememo';
import CallbackChild from './hooks/usecallback/CallbackChild';
import Range from './component/Range';
import Forms from './component/Forms';
import Timer from './component/Timer';
import Todo from './component/Todo';
import Debounces from './component/Debounce';
import FormPost from './component/FormPost';
import Ref from './component/Ref';
import store from './redux/store';
import { Provider } from 'react-redux';
import CountRedux from './component/CountRedux';
import StartStop from './component/StartStop';
import BorderMess from './component/HOC/BorderMess';
import Reduxform from './component/Reduxform';
import CounRef from './component/CounRef';
import Countter from './contextApi/Countter';
import CounterContext from './contextApi/CounterContext';

function App() {
  return (
    <Provider store={store}>
       <CounterContext>

    <div className="App">
      {/* <Debounces/> */}
      {/* <Todo/>  */}
      {/* <Forms/> */}
      {/* <FormPost/> */}
      {/* <Memo/>
      <Usememo/> */}
      {/* <CallbackChild/> */}
       {/* <Timer/> */}
      {/* <CounRef/>   */}
      {/* <Ref/> */}
      {/* <Range/> */}
      {/* <Countter/> */}
      {/* <CountRedux/> */}
      {/* <StartStop/> */}

      {/* <BorderMess/> */}
      {/* <Reduxform/> */}
    </div>
     </CounterContext>

    </Provider>
  );
}

export default App;
