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
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url ==='/message' && method === "POST") {
        // "on" method is an event listener to parse the date stream
        const body = [];
        req.on("data", (chunk) => {
            console.log(chunk);
            body.push(chunk);
        })

        // This will be fired when the chunk was pushed to the array.
        req.on("end", () => {
            //This will concatenate the chunks and parse the data.
            const parsedBody = Buffer.concat(body).toString();
            // console.log(parsedBody);
            const message = parsedBody.split("=")[1];
        
            // uses the file system to save a POST request.
            fs.writeFileSync("message.txt", message);
        
        })

        // Setting the status to a redirection
        res.statusCode = 302;
        res.setHeader("Location", '/');
        return res.end();
    }
});

//This will keep this running for a coing request. The first argument is the port.
server.listen(3000)