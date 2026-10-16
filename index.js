import http from "http";

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is Home page");
  } else if (req.url === "/about") {
    res.end("This is About Page");
  } else if (req.url === "/contact") {
    res.end("This is contact page");
  } else {
    res.end("404 | Page not Found");
  }
});

server.listen(port, () => {
  console.log("server is starting...");
});
