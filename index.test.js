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

    test('can create a Band and test showCount', async () => {
        // TODO - test creating a band
        const testUser = await Band.create({name: "testName", genre: "testGenre", showCount: 20})
        expect(testUser.name).toBe("testName");
        expect(testUser.genre).toBe("testGenre")
        expect(testUser.showCount).toBe(20)
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const testMusician = await Musician.create({ name:"testName", instrument: "testInstrument"})
        expect(testMusician.instrument).toBe("testInstrument");
        expect(testMusician.name).toBe("testName")
    })

    test("test updating and deleting an instance", async () => {
        const testUser = await Band.create({name: "testName", genre: "testGenre", showCount: 20})
        
        const testUpdate = await testUser.update({
            name: "updateName"
        })
        expect(testUser.name).toBe("updateName")

        //delete the instance 
        await testUser.destroy()
        expect(testUser).toBeUndefined()

    })
})