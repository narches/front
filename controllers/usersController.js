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
        const userId = new ObjectId(req.params.id);
        const db = mongodb.getDatabase();
        const result = await db.collection('frontdb').findOne({ _id: userId });
        res.setHeader('Content-Type', 'application/json');
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createUser = async (req, res) => {
    try {
        const db = mongodb.getDatabase();
        const user = {
            email: req.body.email,
            username: req.body.username,
            name: req.body.name,
            ipaddress: req.body.ipaddress
        };
        const response = await db.collection('frontdb').insertOne(user);
        if (response.acknowledged) {
            res.status(201).send();
        } else {
            res.status(500).json(response.error || 'Some error occurred while creating user.');
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const userId = new ObjectId(req.params.id);
        const db = mongodb.getDatabase();
        const user = {
            email: req.body.email,
            username: req.body.username,
            name: req.body.name,
            ipaddress: req.body.ipaddress
        };
        const response = await db.collection('frontdb').replaceOne({ _id: userId }, user);
        if (response.modifiedCount > 0) {
            res.status(204).send();
        } else {
            res.status(500).json(response.error || 'Some error occurred while updating user.');
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const userId = new ObjectId(req.params.id);
        const db = mongodb.getDatabase();
        const response = await db.collection('frontdb').deleteOne({ _id: userId });
        if (response.deletedCount > 0) {
            res.status(204).send();
        } else {
            res.status(500).json(response.error || 'Some error occurred while deleting user.');
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getAll, getSingle, createUser, updateUser, deleteUser };
