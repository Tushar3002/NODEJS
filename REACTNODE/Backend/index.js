import express from "express";

import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());

app.post("/api/name", (req, res) => {
  console.log(req.body);
  res.json({ status: "Received" });
});
// app.get("/api/name", (req, res) => {
//   console.log(req.body);
//   res.json({ status: "Received" });
// });

app.get("/api/data", (req, res) => {
  res.json({
    message: "hello everyone",
  });
});

app.listen(5000, () => {
  console.log(`Server is Running`);
});
