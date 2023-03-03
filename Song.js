//Add a new file Song.js and in it, define a new model. It should have properties 
//title (string) and year (number)

const {sequelize, Sequelize} = require("./db")

let Song = sequelize.define("Song", {
    title: Sequelize.STRING,
    year: Sequelize.INTEGER
})

module.exports = {
    Song
}