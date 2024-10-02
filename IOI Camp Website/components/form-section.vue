<template lang="pug">
.section
  slot
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss" scoped>
a {
  color: #db6d42;
  text-decoration: none;
  transition: 0.3s;
  &:visited {
    color: #db6d42;
  }
  &:hover {
    color: #ff0000;
  }
}
.section {
  background: #fff;
  padding: 25px 5vw 30px 5vw;
  .message {
    padding: 20px 30px;
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    &.success {
      background-color: #67c95c;
      border-color: #c4fca2;
      color: #fff;
    }
    &.error {
      background-color: #B81F00;
      border-color: #8D021E;
      color: #fff;
    }
    &.info {
      background-color: rgb(17, 143, 228);
      border-color: rgb(0, 49, 185);
      color: #fff;
    }
    margin-bottom: 10px;
  }
  h1,
  h2 {
    font-family: "Noto Serif TC", serif;
    color: #000;
    font-weight: 900;
    margin-bottom: 10px !important;
  }
  .padded.content {
    margin-bottom: 15px;
  }
  p {
    font-size: 1.1em;
    pading-bottom: 5px;
  }
  form {
    label.input {
      display: flex;
      margin: 10px 0 !important;
      span {
        font-weight: 300;
        font-family: "Noto Sans TC", sans-serif;
        display: inline-block;
        min-width: 100px;
        width: 20%;
        padding: 5px 10px;
        background: #333;
        color: #e0e0e0;
        margin-right: 10px !important;
        height: calc(1em + 10px);
      }
      textarea {
        min-height: 100px;
      }
      textarea,
      input[type="text"],
      input[type="email"],
      input[type="password"] {
        font-family: "Noto Sans TC", sans-serif;
        font-size: 1.2em;
        display: inline-block;
        width: calc(80% - 10px);
        max-width: calc(100% - 110px);
        background: transparent;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #000;
        border-radius: 0;
        box-shadow: none;
        outline: none;
        &::placeholder {
          color: #aaa;
        }
        &:focus {
          border-bottom-width: 2px;
        }
        &.has-right {
          width: calc(80% - 60px);
          max-width: calc(100% - 180px);
          padding-right: 61px;
        }
        &[disabled] {
          background-color: #ddd;
        }
      }
      &.error {
        span {
          background-color: #900000;
        }
        textarea,
        input[type="text"],
        input[type="email"],
        input[type="password"] {
          width: calc(80% - 40px);
          max-width: calc(100% - 160px);
          border-bottom-color: #900000;
          background-image: url("/flat-2126885.svg");
          background-size: contain;
          background-repeat: no-repeat;
          background-position: right center;
          padding-right: 30px;
        }
      }
      .zero-relative {
        position: relative;
        width: 0;
        height: 0;
        & > * {
          position: absolute;
        }
      }
      .zero-relative.trigger {
        right: 60px;
        .btn {
          cursor: pointer;
          color: rgb(223, 173, 11);
          width: 55px;
          padding: 2px 0;
          text-align: center;
          border-radius: 3px;
          border-width: 1px;
          border-style: solid;
          border-color: rgb(223, 173, 11);
          &:hover {
            background-color: rgb(173, 133, 0);
            color: #fff;
            border-color: #fff;
            transition: 0.3s;
          }
        }
      }
    }
    .right {
      text-align: right;
    }
    button.submit {
      font-size: 1.2em;
      padding: 5px 35px;
      border: none;
      outline: none;
      cursor: pointer;
      transition: 0.3s;
      background-color: #333;
      color: #fff;
      @keyframes quake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        25% {
          transform: scale(1.06) rotate(3deg);
        }
        50% {
          transform: scale(1.02) rotate(0deg);
        }
        75% {
          transform: scale(1.06) rotate(-3deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      &:hover {
        animation: quake 0.6s infinite;
        @include with-mobile {
          animation: none;
        }
      }
    }
  }
}
</style>
