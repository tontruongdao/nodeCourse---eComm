//omitting slash or period, will look for global module.
const http = require('http');
const fs = require("fs");

// Anonymous function takes two argument, request(req) and response(res)
const server = http.createServer((req, res) => {
    // console.log(req);
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url ==='/message' && method === "POST") {
        // uses the file system to save a POST request.
        fs.writeFileSync("message.txt", 'DUMMY');
        // Setting the status to a redirection
        res.statusCode = 302;
        res.setHeader("Location", '/');
        return res.end();
    }
});

//This will keep this running for a coing request. The first argument is the port.
server.listen(3000)