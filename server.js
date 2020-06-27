const express = require('express')
const nunjucks = require('nunjucks')

const recipes = require('./data')

const server = express()

server.use(express.static('./public/'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true,
})

server.get("/", function(req, res) {
    return res.render("home", {recipes});
})  

server.get("/recipes", function(req, res) {

    return res.render("recipes", {recipes})
})

server.get("/about", function(req, res) {
    return res.render("about")
})

server.listen(5000, function() {
})
