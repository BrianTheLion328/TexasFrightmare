const client = require('./client');

async function createCelebrities({name, imageUrl, origin, description}) {
    try {
        const { rows } = await client.query(`
        INSERT INTO celebrities(name, imageUrl, origin, description)
        VALUES($1, $2, $3, $4)
        RETURNING *
        `, [name, imageUrl, origin, description]
        );

        return rows;
    } catch (error) {
        throw error;
    }
}

const getAllCelebrities = async () => {
    try {
        const {rows} = await client.query(`
        SELECT *
        FROM celebrities;
        `);

        return rows;
    } catch (error) {
        throw error;
    }
};

async function getCelebrityById(id) {
    try {
        const { rows: [celeb] } = await client.query(`
        SELECT * FROM celebrities
        WHERE id = $1;
        `, [id] );

        return celeb;

    } catch (error) {
        console.error(error)
    }
}

async function deleteCelebrityById(id) {
    try {
        const { rows } = await client.query(`
        DELETE from celebrities
        WHERE id = $1;
        `, [id]);

        return rows;

    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    createCelebrities,
    getAllCelebrities,
    getCelebrityById,
    deleteCelebrityById
};
