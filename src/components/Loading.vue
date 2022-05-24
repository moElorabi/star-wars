<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoadingComponent",
});
</script>

<template>
  <div class="Loading-div mt-5">
    <b-spinner label="Loading..."></b-spinner>
  </div>
</template>

<style scoped>
.Loading-div {
  margin-left: 50%;
  margin-right: 50%;
}
</style>
