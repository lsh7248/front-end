<template>
  <div id="kmap"></div>
</template>

<script>
import test from "@/map/ktmap-all-desktop";

/* global olleh */

export default {
  data: () => ({}),
  methods: {
    initMap() {
      const container = document.getElementById("kmap");
      const options = {
        center: new olleh.maps.UTMK(958386.063532902, 1941447.5761742294),
        zoom: 9,
        mapTypeId: "ROADMAP",
      };
      console.log(options);
      const map = new olleh.maps.Map(container, options);
      console.log(map);
      console.log("inti Map completed...");
    },
  },
  mounted() {
    console.log(test);
    console.log(olleh);
    console.log("KtMap Component Mounted...");

    if (!window.olleh || !window.olleh.maps) {
      console.log(this.map);
      this.initMap();
    } else {
      this.initMap();
    }
  },
};
</script>
