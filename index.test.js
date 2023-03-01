const {sequelize} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const testUser = await Band.create({name: "testName", genre: "testGenre"})
        expect(testUser.name).toBe("testName");
        expect(testUser.genre).toBe("testGenre")
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const testMusician = await Musician.create({ name:"testName", instrument: "testInstrument"})
        expect(testMusician.instrument).toBe("testInstrument");
        expect(testMusician.name).toBe("testName")
    })
})