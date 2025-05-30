console.log("hello world");
import express from "express";
import cors from "cors";
import basicMulter from "./routes/multerRoutes.js"

const app = express();
app.use(cors());


app.use("api/v1",basicMulter)
console.log("hello world");
let name:string="praveen"
name="hello"

app.listen(8000, () => {
  console.log("server listening 8000");
});
