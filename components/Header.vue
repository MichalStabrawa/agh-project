<template>
  <header class="header">
    <header class="wrapper">
      <h1>{{title}}</h1>
      <h2>{{author}}</h2>
      <button class="btn-header">Dalej</button>
    </header>
  </header>
</template>

<style scoped lang="scss">
.header {
  background-image: url("./../assets/img/header.png");
  height: calc(100vh - 60px);
  background-size: cover;
  background-position: center;
}

.wrapper {
  padding-left: 50px;
  color: #fff;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 40px;
  }
}
.btn-header {
  width: 150px;
  height: 50px;
  background: #fff;
  border: 0px;
  border-radius: 10px;
  font-size: 1.2rem;
  margin-top: 20px;
}
</style>


<script>
export default {
  data() {
    return {
      title: "Projekt Zaliczeniowy AGH",
      author: "Michał Stabrawa"
    };
  }
};
</script>

<style scoped>
.header-wrapper {
  padding: 50px;
  color: #fff;
}
h1 {
  margin: 0;
}
</style>



