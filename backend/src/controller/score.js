const sequelize = require('../db/db');

const getScores = async function (req,res){
    try {
        const [scores, metadata] = await sequelize.query(
            `SELECT SUM(gold), username FROM gold GROUP BY username ORDER BY id DESC`
        )
        return res.status(200).send(scores);
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
}

module.exports = {
    getScores
}
