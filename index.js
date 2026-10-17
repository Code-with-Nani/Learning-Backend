import express from "express";

const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello this is home page");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Baba</h1>");
});

app.get("/contact", (req, res) => {
  res.json({ name: "Hanan", age: 22 });
});

app.post("/", (req, res) => {
  let body = req.body;
  res.send(body);
});

let users = [
  {
    id: 1,
    fullName: "Osman Gazi",
    email: "osman.gazi@empire.org",
    role: "System Founder",
    accountStatus: "Active",
  },
  {
    id: 2,
    fullName: "Mehmed Fatih",
    email: "mehmed.theconqueror@empire.org",
    role: "Network Architect",
    accountStatus: "Active",
  },
  {
    id: 3,
    fullName: "Suleiman Kanuni",
    email: "suleiman.magnificent@empire.org",
    role: "Compliance Officer",
    accountStatus: "Active",
  },
  {
    id: 4,
    fullName: "Selim Yavuz",
    email: "selim.grim@empire.org",
    role: "Security Administrator",
    accountStatus: "Suspended",
  },
  {
    id: 5,
    fullName: "Abdulhamid II",
    email: "abdulhamid.last@empire.org",
    role: "Database Overseer",
    accountStatus: "Pending",
  },
];

app.get("/users/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  let existingUser = users.find((user) => user.id == id);
  if (!existingUser) {
    return res.send("404 | User does not exist");
  }
  res.send(existingUser);
});

app.get("/search", (req, res) => {
  let query = req.query;
  
  res.send(query);
});

app.listen(port, () => {
  console.log(`Sever is listening on port ${port}`);
});

// import http from "http";

// const port = 3000;

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("This is Home page");
//   } else if (req.url === "/about") {
//     res.end("This is About Page");
//   } else if (req.url === "/contact") {
//     res.end("This is contact page");
//   } else {
//     res.end("404 | Page not Found");
//   }
// });

// server.listen(port, () => {
//   console.log("server is starting...");
// });
