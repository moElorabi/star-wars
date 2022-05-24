<script lang="ts">
export default {
  name: "FilmesView",
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <b-row class="d-flex justify-content-between mt-2">
    <b-col cols="4" :key="index" v-for="(movie, index) in movies" class="mb-2">
      <b-button
        v-b-toggle="`collapse-${index}`"
        variant="primary"
        class="movie-btn"
        >{{ movie.title }}</b-button
      >

      <b-collapse :id="`collapse-${index}`" class="mt-2">
        <b-card class="m-auto">
          <div class="card-body">
            <p class="card-text"><span>DIRECTOR:</span> {{ movie.director }}</p>
            <p class="card-text"><span>PRODUCER:</span> {{ movie.producer }}</p>
            <p class="card-text">
              <span>RELEASE DATE:</span> {{ movie.release_date }}
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
  min-height: 200px;
}
span {
  color: #0d6efd;
}
</style>
