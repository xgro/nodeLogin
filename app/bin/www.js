"use strict";

const app = require("../app");
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Listening PORT: ${PORT}...`);
});