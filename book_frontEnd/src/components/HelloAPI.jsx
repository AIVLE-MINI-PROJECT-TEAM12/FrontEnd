import React, { useEffect, useState } from 'react';

const HelloAPI = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/hello") // 백엔드 주소
      .then((response) => {
        if (!response.ok) {
          throw new Error("응답 실패");
        }
        return response.text(); // 문자열 반환이므로 .text()
      })
      .then((data) => {
        setMessage(data);
      })
      .catch((error) => {
        console.error("API 호출 오류:", error);
      });
  }, []);

  return (
    <div>
      <h2>📡 백엔드 메시지:</h2>
      <p>{message}</p>
    </div>
  );
};

export default HelloAPI;
