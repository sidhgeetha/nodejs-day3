import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/Config.js";
import mentorRouter from "./Routers/mentor.router.js";
import studentRouter from "./Routers/student.router.js";

dotenv.config();

const app = express();
// const PORT = 4000;
app.use(cors());
app.use(express.json());
const port = process.env.PORT;

connectDB();

app.get("/", (req, res) => {
  res.status(200).send(`<div style="text-align:center">
 
 <h1>Montors and students </h1>
       <h5><a href="https://web.postman.co/workspace/0b740ab5-96dc-4a8f-85b2-10a7807d7fb9/collection/33139018-685c0926-4686-4713-a95d-a00f120ffc57?action=share&source=copy-link&creator=33139018">Postman Collection Link</a></h5>

 </div>`);
});

app.use("/api" , mentorRouter);
app.use("/api", studentRouter);

app.listen(port, () => {
  console.log("App is running on the port", port);
});
