import express from "express";
import cors from "cors";
import router from "./src/routes/index.js";
import config from "./src/utils/config.js";
import { DBConnect } from "./src/utils/db.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

(async () => {
    try {
        await DBConnect(config.mongo_uri);
        app.listen(config.port, () => console.log(`Server is running at port ${config.port}`));
    } catch (error) {
        console.error("Error starting the server: ", error);
    };
})();