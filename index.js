const express = require("express");    //CREATING A BINDING THAT REUIRES "express"

const app = express();                 // CREATING THE BINDING "app" and asking it to run "express" as a function

const PORT = process.env.PORT || 7000;     // telling the cloud to use its port available at the process environment or use mine = 7000

app.listen(7000, () => {
    console.log(`server running at port ${PORT}`)    // when my server is called, show me the port it is listening to.
});

