<script setup lang="ts">
</script>

<script lang="ts">
export default {
  data() {
    return {
      text: ''
    };
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
  <p>{{ text }}</p>
  <input
    type="submit"
    value="Débobardiser (⌘+↵)"
    id="submit_button"
    class="button-4"
    role="button">
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
