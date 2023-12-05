import express from "express";
import mongoose from "mongoose";
import routerData from './router/Reg.router.js';
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 9001;

app.listen(PORT, () => {
    console.log("server is running on http://localhost:" + PORT);
});



async function main() {
const url = process.env.MONGODBDATA;

console.log('URL-',url)



    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log("DB connected"))
        .catch((error) => console.log(error));
}

main()
app.use(routerData);
