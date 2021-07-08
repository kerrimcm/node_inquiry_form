const http = require('http');
var fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        res.end()
    })
    if(req.method === "POST") {
      let body = ""
    req.on('data', chunk => {
      body += chunk.toString();
    })
    req.on('end', () => {
      console.log(body);
      fs.writeFile('somefile.txt', body, (err) => {
        if(err){
            throw err
        }
      })
      res.end()
    })}
})

server.listen(3000)

console.log('http://127.0.0.1:3000')

