const express = require("express")
const helmet = require("helmet")
const config = require("./config")
const loaders = require("./loaders")
const {ProjectRoute}=require("./api-routes")
          
config()
loaders()

const app = express()
app.use(express.json())
app.use(helmet())


app.listen(process.env.APP_PORT, () => {
    console.log("sunucu ayağa kalktı")
    app.use("/projects",ProjectRoute.router)
})