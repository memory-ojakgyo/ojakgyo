// src/main/frontend/src/App.js

import React, { useEffect, useState } from "react";

function App() {

  // message 초기값을 ""으로 설정.
  const [message, setMessage] = useState("");

  // useEffect(함수,배열) : 컴포넌트가 화면에 나타났을(마운트)때 자동 실행.
  useEffect( () => {
     
        // fetch(url,options) : HTTP 요청 함수
        fetch('/demo/hello')
        .then(response => response.text())
        .then(message => {
        setMessage(message);
        });
        },[])
        
  return ( <div>백엔드에서 가져온 데이터입니다 : {message}</div> );
}

export default App;
