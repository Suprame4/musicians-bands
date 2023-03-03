const {sequelize} = require('./db');
const {Band, Musician, Song} = require('./index')

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
        const testBand = await Band.create({name: "testBand", genre: "testGenre", showCount: 20})
        expect(testBand.name).toBe("testBand");
        expect(testBand.genre).toBe("testGenre")
        expect(testBand.showCount).toBe(20)
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
        const deletedUser = await testUser.destroy() 
    
        console.log("USER: ",deletedUser)
        expect(deletedUser).toEqual(testUpdate)

    })

    /*
 Write a test to add multiple musicians to a band. In the test:

Band.findAll() to get the bands (if there aren’t any from the previous tests, you’ll have to Band.create() some!)

For each of the bands, use something like foundBand.getMusicians() to check that they have been added correctly!
    */
    test("test association with 3 musician and 1 band (one-to-many)", async () => {
        //const testBand = await Band.create({name: "testBand", genre: "testGenre", showCount: 20})

        const testMusician = await Musician.create({ name:"testMusician", instrument: "testInstrument"})
        const testMusician2 = await Musician.create({ name:"testMusician2", instrument: "testInstrument"})
        const testMusician3 = await Musician.create({ name:"testMusician3", instrument: "testInstrument"})

        Musician.belongsTo(Band)
        Band.hasMany(Musician)

        const someBand = await Band.findByPk(1)
        await someBand.addMusician(testMusician)
        await someBand.addMusician(testMusician2)
        await someBand.addMusician(testMusician3)

        //await someBand.addMusicians([testMusician, testMusician2, testMusician3])        
        const someMusician = await Musician.findByPk(1)
        
        const bandMusicians = await someBand.getMusicians()
        //console.log(bandMusicians)

        expect(bandMusicians.length).toBe(3)
    })

    test("test eager loading with the musician, band and song models", async () => {
        //const testBand = await Band.create({name: "testBand", genre: "testGenre", showCount: 20})

        //const testMusician = await Musician.create({ name:"testMusician", instrument: "testInstrument"})
        //const testMusician2 = await Musician.create({ name:"testMusician2", instrument: "testInstrument"})
        //const testMusician3 = await Musician.create({ name:"testMusician3", instrument: "testInstrument"})
    
        const Song1 = await Song.create({title: "songTitle1", year: 2023})

        const someBand = await Band.findAll({
            include : [
                { model: Musician }
            ]
        })

        //await someBand.addSong(Song1)

        const bandSong = await Band.findAll({
            include : [
                { model: Song}
            ]
        })

        console.log(JSON.stringify(someBand[0].Musicians, null, 2))
        console.log("BANDSONG: ", JSON.stringify(bandSong, null, 2))

        expect(someBand[0].Musicians.length).toBe(3)
        expect(bandSong[0].Songs.length).toBe(0)
    })
})