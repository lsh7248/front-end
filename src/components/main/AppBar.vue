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

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>

    <template v-slot:extension>
      <v-tabs align-with-title>
        <v-tab
          v-for="(item, index) in tabitems"
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

    tabitems: [
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
  },
};
</script>
