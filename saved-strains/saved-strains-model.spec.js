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

    describe('testing insert()', () => {

        it('should insert the new strains into the db', async () => {

            await Saved.add({
                "user_id": 1, 
                "ailments": "anxiety, depression, appetite",
                "description": "If you were traumatized by Stephen King’s It and its killer clown villain, the name of this strain might set you off. ",
                "effects": "Pennywise also has significant medical uses that flow from its high 1:1 ratio of THC to the more therapeutic cannabinoid CBD. High CBD strains have shown potential in alleviating the effects of PTSD, arthritis, epilepsy and various neurological disorders. These kinds of strains have also been observed to have neuroprotective properties. Pennywise’s generally sedate mood can even help relieve stress and calm anxiety.",
                "flavor": "dank, earthy",
                "strain": "Pennywise",
                "type": "indica"
            });
            await Saved.add({
                "user_id": 1, 
                "ailments": "anxiety, depression, insomnia",
                "description": "Honey Boo Boo’s strong sedative properties can also have many applications for medical cannabis patients. It may temporarily take the edge off of stress, depression, and anxiety. It can also soothe physical symptoms, dulling aches and pains whether they’re temporary, as due to injury, or chronic, as due to conditions like lupus or arthritis. The strain’s anti-inflammatory properties can take care of everyday irritations like headaches as well. Finally, in the right circumstances, Honey Boo Boo can lull even the most stubborn insomniacs to sleep. Because it is not known to bring about any paranoid, recursive patterns of thinking, this strain is a good option for patients who are prone to panic or who have a low THC tolerance.",
                "flavor": "sweet, fruit, skunky",
                "strain": "Honey Boo Boo",
                "type": "indica"
            });

            const strains = await db('savedstrains');

            expect(strains).toHaveLength(2);
        });
    });

    describe('testing remove()', () => {

        it('should remove the strain from db', async () => {
            await Saved.add({
                "user_id": 1, 
                "ailments": "anxiety, depression, appetite",
                "description": "If you were traumatized by Stephen King’s It and its killer clown villain, the name of this strain might set you off. ",
                "effects": "Pennywise also has significant medical uses that flow from its high 1:1 ratio of THC to the more therapeutic cannabinoid CBD. High CBD strains have shown potential in alleviating the effects of PTSD, arthritis, epilepsy and various neurological disorders. These kinds of strains have also been observed to have neuroprotective properties. Pennywise’s generally sedate mood can even help relieve stress and calm anxiety.",
                "flavor": "dank, earthy",
                "strain": "Pennywise",
                "type": "indica"
            });
            await Saved.add({
                "user_id": 1, 
                "ailments": "anxiety, depression, insomnia",
                "description": "Honey Boo Boo’s strong sedative properties can also have many applications for medical cannabis patients. It may temporarily take the edge off of stress, depression, and anxiety. It can also soothe physical symptoms, dulling aches and pains whether they’re temporary, as due to injury, or chronic, as due to conditions like lupus or arthritis. The strain’s anti-inflammatory properties can take care of everyday irritations like headaches as well. Finally, in the right circumstances, Honey Boo Boo can lull even the most stubborn insomniacs to sleep. Because it is not known to bring about any paranoid, recursive patterns of thinking, this strain is a good option for patients who are prone to panic or who have a low THC tolerance.",
                "flavor": "sweet, fruit, skunky",
                "strain": "Honey Boo Boo",
                "type": "indica"
            });

            await Saved.remove( 1 );

            const strains = await db('savedstrains');

            expect(strains).toHaveLength(1);
        });
    });
});