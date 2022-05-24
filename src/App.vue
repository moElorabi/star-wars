<script lang="ts">
import { defineComponent } from "vue";
import StarshipsView from "./views/StarshipsView.vue";
import FilmesView from "./views/FilmesView.vue";
import NavBarComponent from "./components/NavBar.vue";
import LoadingComponent from "./components/Loading.vue";
import { FilmesService } from "./service/FilmesService";
import { StarshipsService } from "./service/StarshipsService";
import type { AppViewData } from "./service/interfaces/interfaces";

export default defineComponent({
  name: "App",
  components: {
    StarshipsView,
    FilmesView,
    NavBarComponent,
    LoadingComponent,
  },
  data(): AppViewData {
    return {
      movies: [],
      starships: [],
      isMovies: true,
    };
  },
  methods: {
    async moviesData(): Promise<void> {
      if (this.movies.length > 0) return;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { data }: any = await FilmesService.getMovies();
      this.movies = data.results.reverse();
    },
    async starshipsData() {
      if (this.starships.length > 0) return;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { data }: any = await StarshipsService.getStarships();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const sortedData = data.results.sort(function (aItem: any, bItem: any) {
        const convertAItemToNumber = parseInt(aItem.length.replace(/,/g, ""));
        const convertBItemToNumber = parseInt(bItem.length.replace(/,/g, ""));

        return (
          Math.ceil(convertAItemToNumber) - Math.ceil(convertBItemToNumber)
        );
      });
      this.starships = sortedData;
    },
  },
  watch: {
    $route(): void {
      this.$route.path === "/filmes"
        ? (this.moviesData(), (this.isMovies = true))
        : (this.starshipsData(), (this.isMovies = false));
    },
  },
});
</script>

<template>
  <NavBarComponent />
  <LoadingComponent
    v-if="
      (movies.length === 0 && $route.path === '/filmes') ||
      (starships.length === 0 && $route.path === '/starships')
    "
  />
  <FilmesView v-if="isMovies" :movies="movies" />
  <StarshipsView v-if="!isMovies" :starships="starships" />
</template>

<style>
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
.navbar {
  flex-wrap: inherit !important;
  justify-content: space-around !important;
}
.movie-card {
  max-width: fit-content;
}
</style>
