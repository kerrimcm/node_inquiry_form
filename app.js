const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('index.html', (err,data) => {
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  })
  if(req.method === "POST") {
    let body = ""
    req.on('data', chunk => {
      body += chunk.toString()
  })
  req.on('end', () => {
    let userData = body.replace('name=', 'Name: ').replace('email=', 'Email address: ').replace('message=', 'Inquiry message: ').replace('submit=Sumbit', '').replace('inquiry', '').replace('%40', '@').replaceAll('+', ' ').replaceAll('&', ' ') + '\n'
    fs.appendFile('userData.txt', userData, (err) => {
      if(err){
        throw err
      }
    })
  })}
});

server.listen(3000)

console.log('http://127.0.0.1:3000')
   