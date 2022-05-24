<script lang="ts">
import type { NavBarData } from "@/service/interfaces/interfaces";
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavBarComponent",
  data(): NavBarData {
    return {
      active: "filmes",
    };
  },
  methods: {
    setActiveBTN(btnName: string): void {
      this.active = btnName;
    },
  },
  watch: {
    $route() {
      this.$route.path === "/filmes"
        ? this.setActiveBTN("filmes")
        : this.setActiveBTN("starships");
    },
  },
});
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/filmes">STAR WARS</RouterLink>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink
            :class="['nav-link', active === 'filmes' ? 'active' : '']"
            to="/filmes"
            >filmes</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink
            :class="['nav-link', active === 'starships' ? 'active' : '']"
            to="/starships"
            >Starships</RouterLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
