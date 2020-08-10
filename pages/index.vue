<template>
  <div class="login-signup-wrapper">
    <div class="container login-signup" :class="showLogin ? 'right-panel-active' : ''">
      <div class="form-container sign-up-container">
        <form @submit.prevent="register">
          <h2>Create Account</h2>
          <div
            v-if="errors"
            class="alert alert-danger text-center alert-custom"
            role="alert"
          >{{errors}}
          </div>
          <input
            type="email"
            placeholder="Email"
            v-model="registerDetails.emailAddress"/>
          <input
            type="password"
            placeholder="Password"
            v-model="registerDetails.desiredPassword"/>
          <input
            type="text"
            placeholder="Contact Number"
            v-model="registerDetails.contactNumber"/>
          <input
            type="text"
            placeholder="Reason"
            v-model="registerDetails.reason"/>
          <button>
            <span v-if="loading"><Spinner /></span>
            <span v-else>Sign Up</span>
          </button>
        </form>
      </div>
      <div class="form-container sign-in-container">
        <form @submit.prevent="login">
          <h2>Sign in</h2>
          <div
            v-if="errors"
            class="alert alert-danger text-center alert-custom"
            role="alert"
          >{{errors}}
          </div>
          <input type="email" placeholder="Email" v-model="loginDetails.emailAddress"/>
          <input type="password" placeholder="Password" v-model="loginDetails.password"/>
          <button>
            <span v-if="loading"><Spinner /></span>
            <span v-else>Sign In</span>
          </button>
        </form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h2>Welcome Back!</h2>
            <p>To keep connected with us please login with your personal info</p>
            <button class="ghost" @click="switchLayout">
              Sign In
            </button>
          </div>
          <div class="overlay-panel overlay-right">
            <h2>Hello, Friend!</h2>
            <p>Enter your personal details and start journey with us</p>
            <button class="ghost" @click="switchLayout">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex";
  import Spinner from "../components/Spinner";

  export default {
    name: "index",
    components : {

    },
    data() {
      return {
        showLogin: false,
        loginDetails: {
          emailAddress: '',
          password: ''
        },
        registerDetails: {
          emailAddress: '',
          desiredPassword: '',
          contactNumber: '',
          reason: ''
        },
        loading : false
      }
    },
    methods: {
      login() {
        this.loading = true;
        this.$store.dispatch('auth/login', this.loginDetails)
        .then(res => {
          this.loading = false
          if (res.data.status) this.$router.push('/dashboard');
        });
      },
      register(){
        const checked = Object.values(this.registerDetails).filter(single => single);
        if (checked.length !== 4) this.$store.commit('auth/set_error', 'Please fill all the fields')
        this.$store.dispatch('auth/register', this.registerDetails)
          .then(res => {
            if(res.data.status){
              this.showLogin = false;
            }
          });
      },
      switchLayout(){
        this.showLogin = !this.showLogin;
        this.$store.commit('auth/unset_error');
      }
    },
    computed: {
      ...mapState({
        errors: state => state.auth.errors
      })
    }
  }

</script>

