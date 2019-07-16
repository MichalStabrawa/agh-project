<template>
  <nav class="nav">
    <div class="container is-fluid">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/project">Select</nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

 <style scoped>
.nav {
  width: 100%;
  height: 60px;
  background: linear-gradient(
    to right,
    #1e5799 0%,
    #207cca 0%,
    #0a0605 59%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  color: #fff;
  display: flex;
  align-items: center;
}
a {
  margin: 10px;
  margin-left: 0;
  text-decoration: none;
  color: #fff;
}
</style>


