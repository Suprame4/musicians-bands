const {Sequelize, sequelize} = require('./db');

// TODO - define the Musician model

//The Musician model should have name and instrument properties, both of which are strings.
let Musician = sequelize.define("Musician", {
    name: Sequelize.STRING,
    instrument: Sequelize.STRING
});

module.exports = {
    Musician
};