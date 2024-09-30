// index.js 파일
const express = require("express");
const app = express();
const port = 3000; // 서버 포트 설정

// 기본 라우트 설정
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 서버 실행
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
