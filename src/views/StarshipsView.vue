<script lang="ts">
export default {
  name: "StarshipsView",
  props: {
    starships: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <b-row class="d-flex justify-content-between mt-2">
    <b-col
      cols="4"
      :key="index"
      v-for="(item, index) in starships"
      class="mb-2"
    >
      <b-button
        v-b-toggle="`collapse-${index}`"
        variant="primary"
        class="movie-btn"
        >{{ item.name }}</b-button
      >
      <b-collapse :id="`collapse-${index}`" class="mt-2">
        <b-card class="m-auto">
          <div class="card-body">
            <p class="card-text"><span>LENGTH:</span> {{ item.length }}</p>
            <p class="card-text"><span>CREW:</span> {{ item.crew }}</p>
            <p class="card-text">
              <span>MANUFACTURER:</span> {{ item.manufacturer }}
            </p>
            <p class="card-text"><span>MODEL:</span> {{ item.model }}</p>
            <p class="card-text">
              <span>PASSENGERS:</span> {{ item.passengers }}
            </p>
          </div>
        </b-card>
      </b-collapse>
    </b-col>
  </b-row>
</template>

<style scoped>
.movie-btn {
  width: -webkit-fill-available;
}
.card {
  min-height: 275px;
}
span {
  color: #0d6efd;
}
</style>
