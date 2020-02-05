const db = require('../database/dbConfig');

const Saved = require('./saved-strains-model');

describe('Saved strains model from recommendations', () => {

    describe('test environment', function() {
        it('should be using the testing environment', function() {
            expect(process.env.DB_ENV).toBe('test');
        })
    })

    beforeEach(async () => {
        await db('savedstrains').truncate();
    })

    describe('insert()', () => {

        it('should insert the new strains into the db', async () => {

            await Saved.add({ strain: 'Pennywise' });
            await Saved.add({ strain: 'Honey Boo Boo' });

            const strains = await db('savedstrains');

            expect(strains).toHaveLength(2);
        });
    });
});