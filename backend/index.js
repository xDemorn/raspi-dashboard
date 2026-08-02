//server.js
import express from "express";
import si from "systeminformation";
import path from "path";

const app = express();
const PORT = 3000;
// const students = [
//   {
//     name: "Aman Shrey",
//     email: "aman@gmail.com",
//     enrolledCourse: "Python",
//   },
//   {
//     name: "Shreya Gupta",
//     email: "shreya@example.com",
//     enrolledCourse: "Web Development",
//   },
//   {
//     name: "Rahul Mishra",
//     email: "rahul@example.com",
//     enrolledCourse: "DSA in Java",
//   },
// ];

const values = {
   'cpu': '*',
   'mem': 'total, used, free',
   'os': '*',
   'diskLayout': '*',
   'networkInterfaces': '*'
}

// Serve static files
app.use(express.static('public'));

// Configure Express to use EJS
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index"); // Render your HTML page
});

app.get("/api/system-stream", (req, res) => {
  // Set up SSE headers
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // Start observing system info
  si.observe(values, 3000, data => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  });

  // Clean up when client disconnects
  req.on('close', () => {
    res.end();
  });
});

// app.get("/api", (req, res) => {
//   res.render("students", { students });
// });

app.listen(PORT, (req, res) => {
  console.log(`Server is running on http://localhost:${PORT}`);
});