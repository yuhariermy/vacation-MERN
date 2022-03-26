import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

// import postRoute from "../server/routes/post";
import postRoutes from "./routes/posts.js";

const app = express();

app.use("/posts", postRoutes);
// app.use("/posts", postRoute);

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ extendedlimit: "30mb", extended: true }));

const PORT = process.env.PORT || 5000;

mongoose
  .connect(
    "mongodb+srv://ermiee7:K0d0ksup3r10@cluster0.fp9ur.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on port : http://localhost:${PORT}`)
    )
  )
  .catch((err) => console.error(err.message));
