const {Sequelize, sequelize} = require('./db');

// TODO - define the Band model
//The Band model should have name and genre properties, both of which are strings.
let Band = sequelize.define("Band", {

    name: Sequelize,
    genre: Sequelize.STRING
})

module.exports = {
    Band
};