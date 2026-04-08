/* eslint-disable */

//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['BBB', 'CCC', 'AAA Link 팀']);

  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav"> 
        <h4>{ 글제목[0] } <span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span>{따봉} </h4>
      </div>

      <button onClick={()=>{
        let copy2 = [...글제목];
        copy2.sort();
        글제목변경(copy2);
      }}>정렬

      </button>

      <div className="list">
       <h3>{ 글제목[1] }</h3>
      </div>
      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '리엑트어려워';
        글제목변경(copy);
      }}>글수정
      </button>

      <div className="cha">
        <h4>{글제목[2]}</h4> 

      </div>

      
      <Modal/> 
      <Modal2/>

    </div>
  )
}

let Modal2 = ()=> {
  return (
    <div calssName='cc'>
      <h4>안녕</h4>
    </div>
  )
}

function Modal(){// -< 컴포넌트라고 부름
  return (
    <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}


export default App