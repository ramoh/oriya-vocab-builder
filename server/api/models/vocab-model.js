const mongoose = require("mongoose");

const { Schema } = mongoose;

const VocabSchema = new Schema(
    {
        english: {
            type: String,
            required: "English word can not be blank"
        },
        oriya: {
            type: String,
            required: "Oriya word can not be blank"
        }
    },
    {
        collection: "vocab"
    }
);

module.exports = mongoose.model("Vocab", VocabSchema);