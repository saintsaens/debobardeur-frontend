<script setup lang="ts">
</script>

<script lang="ts">
import { postData } from './main';
export default {
  data() {
    return {
      text: '',
      response: ''
    };
  },
  mounted() {
    const textarea = document.querySelector("#text_with_bobards_id");
    textarea.addEventListener('keydown', (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
        event.preventDefault();
        document.querySelector("#submit_button").click();
      }
    })
  },
  methods: {
    async postData() {
      this.response = await postData(this.text)
    }
  }
}
</script>

<template>
  <textarea
    v-model="text"
    class="input"
    rows="9"
    cols="80"
    id="text_with_bobards_id"
    name="text_with_bobards"
    autofocus
    placeholder="Entrez votre texte.">
  </textarea>
  <input
    type="submit"
    value="Débobardiser (⌘+↵)"
    id="submit_button"
    class="button-4"
    role="button"
    @click="postData">
    <p v-if="response" class="preview">{{ response }}</p>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
