<template>
  <div>
    <div class="sidebar-wrap">
      <div class="sidebar-item">
        <nuxt-link to="/dashboard" class="sidebar-item__link">
          <span><img class="sidebar-item__img"
                     src="/images/dashboard/dashboard.png"
                     alt="icon"></span>Dashboard
        </nuxt-link>
      </div>
        <nuxt-link to="/user-access" class="sidebar-item__link">
          <span><img class="sidebar-item__img"
                     src="/images/dashboard/social.png"
                     alt="icon"></span>User Access
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Sidebar"
  }
</script>

<style scoped>
  .nuxt-link-active {
    color: #495057;
    background: #e0e0e0;
  }
</style>
