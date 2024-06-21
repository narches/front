const mongodb = require('../database/monge');
const ObjectId = require('mongodb').ObjectId;




const getAll = async (req, res) => {
    try {
        const db = mongodb.getDatabase();
        const result = await db.collection('frontdb').find().toArray();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getSingle = async (req, res) => {
    try {
        const userId = new ObjectId(req.params.Id);
        const db = mongodb.getDatabase();
        const result = await db.collection('frontdb').findOne({ _id: userId });
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result[0])
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



module.exports = {getAll, getSingle};