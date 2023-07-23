

const express = require('express');
const app = express();

// Path: server.js
app.listen(8080, function() {
  console.log('Server running at http://localhost:8080');
});

//누군가가 /pet으로 접속하면 pet관련 안내문을 띄워주자   
app.get('/pet', function(req, res) { res.send('펫용품 쇼핑할 수 있는 페이지입니다.'); });

// /beauty로 접속하면 뷰티용품 안내문을 띄워주자
app.get('/beauty', function(req, res) { res.send('뷰티용품 쇼핑할 수 있는 페이지입니다.'); });

// /home으로 접속하면 홈용품 안내문을 띄워주자
app.get('/home', function(req, res) { res.send('홈용품 쇼핑할 수 있는 페이지입니다.'); });

// /index로 접속하면 인덱스용품 안내문을 띄워주자

app.get('/index', function(req, res) { res.send('인덱스용품 쇼핑할 수 있는 페이지입니다.'); });

 
// /로 접속하면 /index.html로 리다이렉트 시켜주자
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});


// /write로 접속하면 /write.html로 리다이렉트 시켜주자
app.get('/write', function(req, res) { res.sendFile(__dirname + '/write.html'); });