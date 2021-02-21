<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <!-- Login -->
          <button class="btn btnPrimary" @click="loginModal = !loginModal">Login</button>
          <login v-show="loginModal" @closeModal="loginModal = false" @toToggle="toToggle"></login>
          <!-- Registration -->
          <button class="btn btnPrimary" @click="registrationModal = !registrationModal">Registration</button>
          <registration v-show="registrationModal" @closeModal="registrationModal = false" @toToggle="toToggle"></registration>       
        </div>
      </section>
    </div>
  </div>
</template>

<script>

import login from "../src/components/Login";
import registration from "../src/components/Registration";

export default {
  components: {
    login, registration
  },
  data() {
    return{
      modalValidate: false,
      loginModal: false,
      registrationModal: false
    }
  },
  methods: {
    submitSeconfForm() {
      console.log({
        name: this.modalSecond.name,
        email: this.modalSecond.email,
      })
      this.modalSecond.name = ""
      this.modalSecond.email = ""
      this.modalSecond.show = false
    },
    toToggle () {
      if (this.loginModal) {
        this.loginModal = false,
          this.registrationModal = true
      } else {
        this.loginModal = true,
          this.registrationModal = false
      }
    }
  }
}
</script>

<style lang="scss">
  .form-item {
      .errorText {
          display: none;
          margin-bottom: 8px;
          font-size: 13.4px;
          color: rgb(248, 17, 17);
      }
      &.errorInput .errorText {
          display: block;
      }
      input.error {
          border-color: rgb(248, 17, 17);
      }
  }
</style>
