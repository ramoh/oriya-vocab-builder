const vocabBuilder = require("../controller/vocab-controller");

module.exports = (app) => {
    app.route("/words")
        .get(vocabBuilder.listAllWords)
        .post(vocabBuilder.createAWord);

    app.route("/words/:wordId")
        .get(vocabBuilder.readAWord)
        .put(vocabBuilder.updateAWord)
        .delete(vocabBuilder.deleteAWord);
};
