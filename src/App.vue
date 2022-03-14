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

import {mapState, mapMutations} from "vuex";
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

    const access = this.aceess;

    if (access) {
      this.$axios.default.headers.common["Authorization"] = "JWT" + access;
    } else {
      this.$axios.default.headers.common["Authorization"] = "";
    }
  },

  mounted() {
    setInterval(() => {
      this.getAccess();
    }, 60000);
  },
  computed: {
    ...mapState("auth", ["access", "refresh"]),
  },

  methods: {
    ...mapMutations("auth", ["setAccess"]),
    getAccess() {
      const accessData = {
        refresh: this.refresh,
      };

      this.$axios
        .post("/api/jwt/refresh/", accessData)
        .then((res) => {
          const access = res.data.access;

          console.log(access);

          localStorage.setItem("access", access);
          this.setAccess(access);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
