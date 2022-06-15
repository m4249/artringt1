const router=require('./routes')

var express = require("express");
const port = 3000;
const app = express();

app.use(express.json());

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(router)

app.listen(port, () => {
console.log(`app on port ${port}`);
});
