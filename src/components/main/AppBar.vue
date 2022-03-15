<template>
  <v-app-bar app color="primary" dark hide-on-scroll>
    <div class="d-flex align-center">
      <v-app-bar-nav-icon
        @click.stop="drawerClick"
        v-if="!$route.path.includes('dashboard')"
      ></v-app-bar-nav-icon>

      <h1>KT OneView</h1>
    </div>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-menu bottom left>
      <template v-slot:activator="{on, attrs}">
        <v-btn icon color="yellow" v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, i) in appItems" :key="i" @click="logout">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <template v-slot:extension>
      <v-tabs align-with-title>
        <v-tab
          v-for="(item, index) in tabItems"
          :key="index"
          link
          :to="item.to"
        >
          {{ item.name }}
        </v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
import {bus} from "@/event-bus";
export default {
  name: "AppBar",

  data: () => ({
    drawer: false,
    appItems: [{title: "로그아웃"}],

    tabItems: [
      {
        name: "OneView",
        to: "/",
      },
      {
        name: "대쉬보드",
        to: "/dashboard",
      },
      {
        name: "지도분석",
        to: "/map",
      },
      {
        name: "상세분석",
        to: "/detail",
      },
      {
        name: "게시판",
        to: "/notice",
      },
    ],
  }),
  methods: {
    drawerClick() {
      bus.$emit("DRAWER_CLICK", this.drawer);
    },
    logout() {
      console.log("logout init...");
      // this.$axios.defaults.headers.common["Authorization"] = "";

      const formData = {
        refresh_token: localStorage.getItem("refresh"),
      };
      console.log("Expire refresh token: ", formData.refresh);
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");

      console.log(formData);
      this.$axios
        .post("/api/logout/", formData)
        .then((res) => {
          console.log("logout completed...", res);

          localStorage.removeItem("access");
          localStorage.removeItem("refresh");
          this.$axios.defaults.headers.common["Authorization"] = "";
          this.$router.push("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
