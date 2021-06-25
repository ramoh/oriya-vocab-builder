<template>
  <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorPresent" class="error">Please fill out both fields!</p>
    <div class="ui labeled input fluid">
      <div class="ui label"><i class="united kingdom flag"></i>English</div>
      <input type="text" placeholder="Enter word..." v-model="word.english" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label"><i class="india flag"></i>Oriya</div>
      <input type="text" placeholder="Enter word..." v-model="word.oriya" />
    </div>

    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
export default {
  name: "word-form",
  props: {
    word: {
      type: Object,
      require: false,
      default: () => ({
        english: "",
        oriya: "",
      }),
    },
  },
  data: () => ({
    errorPresent: false,
  }),
  methods: {
    onSubmit: function () {
      if (this.word.english === "" || this.word.oriya === "") {
        this.errorPresent = true;
      } else {
        this.$emit("createOrUpdate", this.word);
      }
    },
  },
};
</script>
<style scoped>
.error {
  color: red;
}
</style>