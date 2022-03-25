import react from "react";
import cors from "cors";
import moongoose from "moongoose";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ extendedlimit: "30mb", extended: true }));
