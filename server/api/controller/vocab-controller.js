const Vocab = require("../models/vocab-model");

exports.listAllWords = (req, res) => {
    Vocab.find({}, (err, words) => {
        if (err) {
            res.status(400).send(err);
        }
        res.json(words);
    });
};

exports.createAWord = (req, res) => {
    const newWord = new Vocab(req.body);
    newWord.save((err, word) => {
        if (err) {
            res.status(400).send(err);
        }
        res.json(word);
    });
};

exports.readAWord = (req, res) => {
    Vocab.findById(req.params.wordId, (err, word) => {
        if (err) {
            res.status(400).send(err);
        }
        res.json(word);
    });
};

exports.updateAWord = (req, res) => {
    Vocab.findOneAndUpdate({ _id: req.params.wordId }, req.body, { new: true }, (err, word) => {
        if (err) {
            res.status(400).send(err);
        }
        res.json(word);
    });
};

exports.deleteAWord = (req, res) => {
    Vocab.deleteOne({ _id: req.params.wordId }, (err) => {
        if (err) {
            res.status(400).send(err);
        }
        res.json({
            message: "Word successfully deleted",
            _id: req.params.wordId
        });
    });
};