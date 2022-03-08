<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="8">
        <v-card class="elevation-12">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" md="8">
                  <v-card-text class="mt-12">
                    <h1
                      class="text-center display-2 primary--text text--accent-3"
                    >
                      KDAP-OneView
                    </h1>
                    <h4 class="text-center mt-4">
                      Ensure your kate id for registration
                    </h4>
                    <v-form id="login-form">
                      <v-text-field
                        v-model="userName"
                        label="Kate 사번"
                        name="username"
                        prepend-icon="mdi-account"
                        type="text"
                        color="primary accent-3"
                      />

                      <v-text-field
                        v-model="userPassword"
                        id="password"
                        label="비밀번호"
                        name="password"
                        prepend-icon="mdi-lock"
                        type="password"
                        color="primary accent-3"
                      />
                    </v-form>
                  </v-card-text>
                  <div class="text-center mt-3">
                    <v-btn rounded color="primary accent-3" dark @click="login"
                      >로그인</v-btn
                    >
                  </div>
                </v-col>
                <v-col cols="12" md="4" class="primary accent-3">
                  <v-card-text class="white--text mt-12">
                    <h1 class="text-center display-1">Welcome to OneView!</h1>
                    <h5 class="text-center">
                      KDAP-OneView 접속 시, 계정권한 신청이 필요합니다.
                    </h5>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn rounded outlined dark @click="step++"
                      >권한 신청</v-btn
                    >
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row class="fill-height">
                <v-col cols="12" md="4" class="primary accent-3">
                  <v-card-text class="white--text mt-12">
                    <h1 class="text-center display-1">Welcome Back!</h1>
                    <h5 class="text-center">
                      계정권한이 있으시면, 로그인 해주세요!
                    </h5>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn rounded outlined dark @click="step--">
                      로그인 페이지
                    </v-btn>
                  </div>
                </v-col>

                <v-col cols="12" md="8">
                  <v-card-text class="mt-12">
                    <h1
                      class="text-center display-2 primary--text text--accent-3"
                    >
                      Create Account
                    </h1>
                    <h4 class="text-center mt-4">
                      Ensure your email for registration
                    </h4>
                    <v-form>
                      <v-text-field
                        label="사번"
                        v-model="userName"
                        name="code"
                        prepend-icon="mdi-account-clock"
                        type="text"
                        color="primary accent-3"
                      />
                      <v-text-field
                        label="이름"
                        v-model="userName"
                        name="name"
                        prepend-icon="mdi-account"
                        type="text"
                        color="primary accent-3"
                      />

                      <v-text-field
                        v-model="userPhone"
                        label="전화번호"
                        name="phone-number"
                        prepend-icon="mdi-phone"
                        type="password"
                        color="primary accent-3"
                      />
                      <v-select
                        v-model="userAuth"
                        :items="authList"
                        item-text="name"
                        item-value="value"
                        :rules="[(v) => !!v || 'Auth is required']"
                        label="요청권한"
                        prepend-icon="mdi-lock"
                        return-object
                      ></v-select>
                    </v-form>
                  </v-card-text>
                  <div class="text-center mt-n5">
                    <v-btn
                      rounded
                      color="primary accent-3"
                      dark
                      @click="registerSubmit"
                      >권한 요청</v-btn
                    >
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import {mapMutations} from "vuex";

export default {
  data: () => ({
    authList: [
      {name: "관리자", value: "ADMIN"},
      {name: "스탭", value: "STAP"},
      {name: "임원", value: "MASTER"},
      {name: "직원", value: "USER"},
    ],
    userAuth: null,
    step: 1,
    items: ["관리자", "임원", "스탭", "직원"],
    userName: null,
    userPhone: null,
    userPassword: null,
    me: {},
  }),
  props: {
    source: String,
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},

  methods: {
    login() {
      console.log("login() ...");
      const postData = new FormData(document.getElementById("login-form"));
      this.$axios
        .post("/api/login/", postData)
        .then((res) => {
          console.log("LOGIN POST RES", res);
          alert(`user ${res.data.username} login OK`);
          this.me = res.data;
        })
        .catch((err) => {
          console.log("LOGIN POST ERR.RESPONSE", err.response);
          alert("LOGIN Fail");
        });
    },
  },
};
</script>
