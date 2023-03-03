const {sequelize} = require('./db');
const {Band, Musician} = require('./index')

//test creating one-to-many associations 
async function fxn() {

    await sequelize.sync({ force: true })

    const testUser =  await Band.create({name: "testBand", genre: "testGenre", showCount: 20})

    const testMusician1 = Musician.create({ name:"testMusician1", instrument: "testInstrument"})
    const testMusician2 = Musician.create({ name:"testMusician2", instrument: "testInstrument"})
    const testMusician3 = Musician.create({ name:"testMusician3", instrument: "testInstrument"})

    Musician.belongsTo(Band)
    Band.hasMany(Musician)

    console.log("TEST1: ", Musician)
    console.log("TEST2: ", Band)
    console.log("USER: ", testUser)
}
fxn()