<template>
  <div class="layout">
    <NavComponent/>
    <nuxt/>
  </div>
</template>

<script>
import NavComponent from "./../components/NavComponent";
export default {
  components: { NavComponent }
};
</script>


<style>
.layout {
  overflow: hidden;
}
html {
  box-sizing: border-box;
}
body {
  box-sizing: border-box;
  margin: 0;
}
</style>
