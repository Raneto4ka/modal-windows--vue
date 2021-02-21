<template>
  <modal title="Registration" @closeModal="$emit('closeModal',clearData())">
    <div slot="body">
      <form @submit.prevent="onSubmit">
        <!-- email -->
        <div class="form-item" :class="{errorInput: $v.email.$error}">
          <label>Email:</label>
          <p class="errorText" v-if="!$v.email.required">Filed is required</p>
          <p class="errorText" v-if="!$v.email.email">Email is not correct !</p>
          <input v-model="email" :class="{error: $v.email.$error}" @change="$v.email.$touch()">
        </div>
        <!-- password -->
        <div class="form-item" :class="{errorInput: $v.password.$error}">
          <label>Password:</label>
          <p class="errorText" v-if="!$v.password.required">Filed is required</p>
          <p class="errorText" v-if="!$v.password.password">Password must have at least {{$v.password.$params.minLength.min}}!</p>
          <input v-model="password" :class="{error: $v.password.$error}" @change="$v.password.$touch()">
        </div>
        <!-- repeatPassword -->
        <div class="form-item" :class="{errorInput: $v.repeatPassword.$error}">
          <label>Repeat Password:</label>
          <p class="errorText" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical.</p>
          <input v-model="repeatPassword" :class="{error: $v.repeatPassword.$error}" @change="$v.repeatPassword.$touch()">
        </div>
        <!-- button -->
        <button class="btn btnPrimary">Submit</button>
      </form>
      <hr>
      <button class="btn btnDefaul" @click="$emit('toToggle', clearData())">I have an account</button>
    </div>
  </modal>
</template>
<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

import modal from './UI/Modal'

export default {
  components: { modal },
  data () {
    return {
      email: '',
      password: '',
      repeatPassword: ''
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    }
  },
  methods: {
    onSubmit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const user = {
          email: this.email,
          password: this.password,
          repeatPassword: this.repeatPassword
        }
        console.log(user);
        // DONE
        this.email = ''
        this.password = ''
        this.repeatPassword = ''
        this.$v.$reset()
        this.$emit('closeModal')
      }
    },
    clearData () {
      this.email = ''
      this.password = ''
      this.repeatPassword = ''
      this.$v.$reset()
    },
  }
}
</script>
