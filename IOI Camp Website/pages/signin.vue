<template lang="pug">
.container
  form-section
    #msg-popout.message(v-if="popout.msg !== ''", :class="popout.status") {{ popout.msg }}
    h1
      font-awesome-icon(icon='chevron-right')
      | &nbsp;登入
    .content
      form#signin-form(@submit.prevent="signin")
        label.input
          span
            font-awesome-icon(:icon="['far', 'envelope']")
            | &nbsp;信箱
          input(
            type="email",
            placeholder="nobugnolife@ioicamp.org",
            v-model="login.email"
          )
        label.input
          span
            font-awesome-icon(icon='key')
            | &nbsp;密碼
          input(
            type="password",
            placeholder="your password",
            v-model="login.password"
          )
        div(style="display: flex; justify-content: space-between; align-items: center;")
          span
            NuxtLink(to="/user/requestPasswordReset/") 忘記密碼
            | ？
          button#signin-btn.submit(type="submit") 登入
    h2
      font-awesome-icon(icon='chevron-right')
      | &nbsp;沒有帳號？
    .padded.content
      p
        | 報名截止囉！感謝支持！
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  head: {
    title: "登入",
  },
  middleware: 'auth',
  auth: 'guest',
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
      popout: {
        msg: "",
        status: "",
      },
    };
  },
  methods: {
    scrollToTop() {
      let currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        scrollTo(0, currentScroll - currentScroll / 5);
        requestAnimationFrame(this.scrollToTop);
      }
    },
    async signin() {
      this.popout.msg = "登入中...";
      this.popout.status = "info";
      this.scrollToTop();
      try {
        let response = await this.$auth.loginWith("IOICStrategy", {
          data: this.login,
        });
      } catch (e) {
        this.popout.status = 'error';
        if (!e.response || !e.response.data) {
          this.popout.msg = "好像壞掉了，請跟我們聯絡 Q_Q";
        } else if (e.response.data.error === "User not found") {
          this.popout.msg = '帳號或密碼錯誤~';
        } else {
          this.popout.msg = '不知道發生什麼事了，可以聯絡我們嗎?';
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  padding-top: $nav-header-space + 20px;
  padding-left: 20vw;
  padding-right: 20vw;
  @include with-mobile {
    padding-top: $mobile-nav-header-space + 20px;
    padding-left: 5vw;
    padding-right: 5vw;
  }
}
</style>
