const sequelize = require('../db/db');

const getLogs = async function (req,res){
    try {
        const [logs, metadata] = await sequelize.query(
            `SELECT * FROM gold WHERE username != sender ORDER BY id DESC LIMIT 15`
        )
        return res.status(200).send(logs);
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
}

module.exports = {
    getLogs
}

