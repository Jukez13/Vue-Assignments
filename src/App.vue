<template>
  <div>
    <nav>
      <router-link exact to="/" style="padding-right:20px">
        About
      </router-link>
      <router-link :to="{ name: 'Books' }">
        Books
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',

};
</script>

<style scoped>
.router-link-active {
  color: red;
  font-weight: bold;
}
</style>