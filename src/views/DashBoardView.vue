<template>
  <v-container class="grey" fluid>
    <v-row class="ma-3 pa-3">
      <v-col cols="4" v-for="event in events" :key="event">
        <v-card color="#385F73" dark>
          <v-card-title class="text-h5">
            {{ event.event_name }}
          </v-card-title>
          <v-card-text>
            {{ event.score }}건 올라감 ㅎㅎ ({{ event.rate }}%)
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-for="n in 2" :key="n" class="ma - 3" dense>
      <v-col align-self="center" cols="6" sm="6" md="4" v-for="k in 3" :key="k">
        <v-card>
          <line-chart v-if="n * k === 1" />
          <area-chart v-else-if="n * k === 2" />
          <bar-chart v-else-if="n * k === 3" />
          <pie-chart v-else-if="n * k === 4" />
          <radar-chart v-else />
          <v-card-actions>
            <v-btn outlined rounded text absolute right> Button </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LineChart from "@/components/chart/LineChart.vue";
import AreaChart from "@/components/chart/AreaChart.vue";
import BarChart from "@/components/chart/BarChart.vue";
import PieChart from "@/components/chart/PieChart.vue";
import RadarChart from "@/components/chart/RadarChart.vue";

export default {
  name: "DashBoard",
  components: {
    LineChart,
    AreaChart,
    BarChart,
    PieChart,
    RadarChart,
  },

  data: () => ({
    events: [
      {
        event_name: "품질VOC 발생건수(전주대비)",
        score: 307,
        rate: 11.2,
      },
      {
        event_name: "VoLTE 절단율(전월대비)",
        score: 307,
        rate: 11.2,
      },
      {
        event_name: "5G 오프로딩율(전주대비)",
        score: 307,
        rate: 11.2,
      },
    ],
  }),
};
</script>
