<template>
  <v-app>
    <app-bar v-if="!$route.path.includes('login')"></app-bar>
    <side-bar v-if="!$route.path.includes('login')"></side-bar>
    <v-main>
      <router-view />
    </v-main>
    <fooster-bar />
  </v-app>
</template>

<script>
import AppBar from "@/components/main/AppBar.vue";
import SideBar from "@/components/main/SideBar.vue";
import FoosterBar from "@/components/main/FoosterBar.vue";

import {mapState} from "vuex";
export default {
  name: "App",
  components: {
    AppBar,
    SideBar,
    FoosterBar,
  },
  data: () => ({
    //
  }),

  beforeCreate() {
    this.$store.commit("initialzeStore");

    const access = this.$store.state.aceess;

    if (access) {
      this.$axios.default.headers.common["Authorization"] = "JWT" + access;
    } else {
      this.$axios.default.headers.common["Authorization"] = "";
    }
  },
  computed: {
    ...mapState("auth", ["isLogin"]),
  },
};
</script>
