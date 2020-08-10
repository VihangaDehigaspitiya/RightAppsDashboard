<template>
  <div>
    <div class="row no-gutters header-wrap">
      <div class="logout ml-auto d-flex flex-row align-items-center">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
            <span class="mr-3">rashmikarc@gmail.com</span><img class="logout__img" src="/images/user-img.png"
                                                               alt="user-img">
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="logout__button dropdown-item" @click="logout">LOGOUT</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    methods: {
      logout() {
        this.$store.dispatch('auth/logout').then(() => {
          this.$router.push('/');
        })
      }
    }
  }
</script>

<style scoped>

</style>
