<template>
  <div>
    <h2>Score: {{ score }} out of {{ words.length }}</h2>
    <form action="#" @submit.prevent="onSubmit">
      <div class="ui labeled input fluid">
        <div class="ui label"><i class="india flag"></i>Oriya</div>
        <input
          type="text"
          readonly
          :disabled="testOver"
          :value="currWord.oriya"
        />
      </div>
      <div class="ui labeled input fluid">
        <div class="ui label"><i class="united kingdom flag"></i>English</div>
        <input
          type="text"
          placeholder="Enter the word..."
          v-model="english"
          :disabled="testOver"
          autocomplete="off"
        />
      </div>
      <button class="positive ui button" :disabled="testOver">Submit</button>
    </form>
    <p :class="['results', resultClass]">
      <span v-html="result"></span>
    </p>
  </div>
</template>
<script>
export default {
  name: "vocab-test",
  props: {
    words: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      incorrectGuesses: [],
      result: "",
      resultClass: "",
      english: "",
      score: 0,
      testOver: false,
      randWords: [...this.words.sort(() => 0.5 - Math.random())],
    };
  },
  computed: {
    currWord: function () {
      return this.randWords.length ? this.randWords[0] : 0;
    },
  },
  methods: {
    onSubmit: function () {
      if (this.english === this.currWord.english) {
        this.flash("Correct!", "success", { timeout: 1000 });
        this.score += 1;
      } else {
        this.flash("Wrong!", "error", { timeout: 1000 });
        this.incorrectGuesses.push(this.currWord.oriya);
      }
      this.english = "";
      this.randWords.shift();

      if (this.randWords.length === 0) {
        this.testOver = true;
        this.displayResults();
      }
    },
    displayResults: function () {
      if (this.incorrectGuesses.length === 0) {
        this.result = "You got everything correct. Well done!";
        this.resultClass = "success";
      } else {
        const incorrect = this.incorrectGuesses.join(", ");
        this.result = `<strong>You got the following words wrong:</strong> ${incorrect}`;
        this.resultClass = "error";
      }
    },
  },
};
</script>
<style scoped>
.results {
  margin: 25px auto;
  padding: 15px;
  border-radius: 5px;
}

.error {
  border: 1px solid #ebccd1;
  color: #a94442;
  background-color: #f2dede;
}

.success {
  border: 1px solid #d6e9c6;
  color: #3c763d;
  background-color: #dff0d8;
}
</style>