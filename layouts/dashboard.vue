<template>
  <div>
    <div class="row no-gutters">
      <div class="col-md-12">
        <Header/>
      </div>
      <div class="col-md-12">
        <div class="row no-gutters">
          <div class="sidebar-layout-wrap">
            <Sidebar/>
          </div>
          <div class="body-content">
            <Nuxt/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import Header from "../components/Header";
  import Sidebar from "../components/Sidebar";

  export default {
    name: "dashboard",
    components: {
      Header,
      Sidebar
    }
  }
</script>

<style scoped>

</style>
