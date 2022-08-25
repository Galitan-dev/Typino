<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>
      By <a href="{{ authorLink }}">{{ author }}</a>
    </h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
    authorLink: String,
    author: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #dca869;
}
</style>
