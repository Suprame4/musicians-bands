const {Band} = require('./Band')
const {Musician} = require('./Musician')
const {Song} = require('./Song')

//define the associations 
//multiple musicians can be added to a band, a musician belongs to a band
Musician.belongsTo(Band)
Band.hasMany(Musician)

//many-to-many association with song and band
Band.belongsToMany(Song, {through: "through_table"})
Song.belongsToMany(Band, {through: "through_table"})


module.exports = {
    Band,
    Musician,
    Song
};

/* 
Code in all the spots where it says TODO in the project (you can search across files to find the spots to edit!). Below are the instructions:

    Create the new sequelize connection
    Define the Band model
    Define the Musician model
    Test creating a band
    Test creating a musician

    
Define the models! Here are the details:

The Musician model should have name and instrument properties, both of which are strings.

The Band model should have name and genre properties, both of which are strings.
*/