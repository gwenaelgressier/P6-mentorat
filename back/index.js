const { app, express } = require("./server");
const { saucesRouter } = require("./routers/sauces.router");
const { authRouter } = require("./routers/auth.router");
const port = 3000;
const path = require("path");

//conection to database
require("./mongo");

//middleware
app.use("/api/sauces", saucesRouter);
app.use("/api/auth", authRouter);

//Routes
app.get("/", (req, res) => {
    res.send("Go to the port 4200!!!");
});

//listen
app.use("/images", express.static(path.join(__dirname, "images")));
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
