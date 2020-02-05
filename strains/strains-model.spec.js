const db = require('../database/dbConfig');

const Strains = require('./strains-model');

describe('Strains model', () => {

    describe('test environment', function() {
        it('should be using the testing environment', function() {
            expect(process.env.DB_ENV).toBe('test');
        })
    })

    beforeEach(async () => {
        await db('strains').truncate();
    })

    describe('insert()', () => {

        it('should insert the new strains into the db', async () => {

            await Strains.add({ strain: 'Pennywise' });
            await Strains.add({ strain: 'Honey Boo Boo' });

            const strains = await db('strains');

            expect(strains).toHaveLength(2);
        });
    });
});