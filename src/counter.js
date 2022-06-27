import React, {useState, useRef} from 'react';
import './counter.css'

const Counter = () => {

  const [result, setresult] = useState({
    number : 0,
    user : "", 
    score: 0
  });

  const counterValue = useRef(null);
  const textValue = useRef();
  const resultValueSuccess = useRef();
  const resultValueFail = useRef();

  const plus = () => {
    if ([result.score] < 10){
      textValue.current.style.display = "none";
      setresult({...result, score : result.score+1});
    } else {
      textValue.current.style.display = "inline";
    counterValue.current.focus();
    };
  };

  const minus = () => {
    if ([result.score] > 0) {
      textValue.current.style.display = "none";
    setresult({...result, score : result.score-1})
    } else {
      textValue.current.style.display = "inline";
      counterValue.current.focus();};
  };

  const send = () => {
    if (textValue.current.style.display == "none") {
      resultValueSuccess.current.style.display = "inline"
      setTimeout(()=> {resultValueSuccess.current.style.display = "none"}, 1000);
    } else {resultValueFail.current.style.display = "inline"
    setTimeout(()=> {resultValueFail.current.style.display = "none"}, 2000);}
  }

return <div>
  <div>
    <p>번호</p>
    <input value={result.number}  />
    <p>이름</p>
    <input value={result.name} />
    <p>점수</p>
    <input value={result.score} ref={counterValue}/>
    <br/>
    <p className="test" ref={textValue} >점수는 0과 10 사이입니다.</p>
  </div>
  <div id='buttonsG'>
    <button id='scorePlus' onClick={plus}>+</button>
    <button id='scoreMinus' onClick={minus}>-</button>
    <button id='scoreSend' onClick={send}>전송하기</button>
  </div>
  <div>
    <p className="result1" ref={resultValueSuccess}>전송이 완료 되었습니다.</p>
    <p className="result2" ref={resultValueFail}>조건을 충족하지 못했습니다. 전송에 실패했습니다.</p>
  </div>
</div>  

};

export default Counter;