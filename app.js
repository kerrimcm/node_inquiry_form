const http = require('http');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('./index.html', function (err, html) {

  if (err) throw err;    

  http.createServer(function(request, response) {  
    response.writeHeader(200, {"Content-Type": "text/html"});  
    response.write(html);  
    response.end();  
  }).listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
  });
});

let data = "Learning how to write in a file."
  
fs.writeFile('Output.txt', data, (err) => { 
  if (err) throw err; 
  console.log(data);
}) 

function WriteToFile(passForm) {
  var fso = CreateObject("Scripting.FileSystemObject"); 
  var s = fso.CreateTextFile("<your Path>/filename.txt", True);
   
  var name = document.getElementById('name');
  var email  = document.getElementById('email');
  var message  = document.getElementById('message');
  var checkbox = document.getElementById('checkbox');
   
  s.writeline("Name :" + name);
  s.writeline("Email :" + email);
  s.writeline("Message :" + message);
  s.writeline("Subscribed :" + checkbox);
  s.writeline("-----------------------------");
  s.Close();
}

