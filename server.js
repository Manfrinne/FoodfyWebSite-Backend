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

    let recipesControl = []

    for(let i = 0; i < 6; i++) {
        recipesControl.push(recipes[i])
    }

    console.log("recipesControl.length")

    return res.render("home", {recipeData: recipesControl});
})  

server.get("/recipes", function(req, res) {

    return res.render("recipes", {recipes})
})

server.get("/about", function(req, res) {
    return res.render("about")
})

server.listen(5000, function() {
})
