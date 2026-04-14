/* eslint-disable */

//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['첫 번째 글', '두 번째 글', '세 번째 글']);

  let [따봉, 따봉변경] = useState([0, 0, 0]);

  let [modalnum, setModalnum] = useState(0);

  let [modal, setModal] = useState(1);
  
  let [입력값, 입력값변경]=useState('');

  let now = new Date().toLocaleDateString();


  return (
    <div className="App">
      
      {/* <div className="black-nav"> 
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
        <h4 onClick={()=>{ setModal(true) }}>{글제목[2]}</h4> 
        <button onClick={()=>{ setModal(modal+1) }}>제목</button>
      </div>

      {
        modal%2 == 0? <Modal></Modal>: null
      } */}


      <div className="cha">
        <h4>ReactBlog</h4> 
      </div>

      
       
      
      {글제목.map(function(a,i){
        
        return (
          
          <div className="list" key={i}>
            <h4 onClick={()=>{
              setModal(modal+1); setModalnum(i);
              }}>{글제목[i]}
            <span onClick={(e)=>{
              e.stopPropagation();
              let copy따봉=[...따봉];
              copy따봉[i]=copy따봉[i]+1;따봉변경(copy따봉);
            }}>👍</span>{따봉[i]}
            <button onClick={(e)=>{
              e.stopPropagation();
              let copy=[...글제목];
              copy.splice(i,1);
              글제목변경(copy);
              let copy3=[...따봉];
              copy3.splice(i,1);
              따봉변경(copy3);
            }}>삭제</button>
            </h4>
            <p>상세내용</p>      
            
          </div>
          
          
        )})}
    
    <input onChange={(e)=>{
      입력값변경(e.target.value);
      console.log(입력값);
      }}>
        
      </input>
      <button onClick={()=>{
          if(입력값.trim() === '') {
            alert('글을 입력해주세요');
            return;
          }
          let copy=[...글제목];
          copy.unshift(입력값);
          글제목변경(copy);
          let copy2=[...따봉];
          copy2.unshift(0);
          따봉변경(copy2);
          입력값변경('');
        }}>글작성</button> 


    {modal % 2 == 0? <Modal 글제목={글제목} i={modalnum} now={now}/>: null}

      
    </div>
  )
}



function Modal(props){// -< 컴포넌트라고 부름
  return (
    <div className='modal'>
        <h4>{props.글제목[props.i]}</h4>
        <p>{props.now}</p>
        <p>상세내용</p>
        {/* <button onClick={()=>{
          let copy=[...props.글제목];
          copy[0]='여자코트추천';
          props.글제목변경(copy);
        }}>글수정</button> */}
    </div>
  )
}


export default App