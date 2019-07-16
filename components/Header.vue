<template>
  <header class="header">
    <header class="wrapper">
      <h1>{{title}}</h1>
      <h2>{{author}}</h2>
      <button class="btn-header" @click="goTo">Dalej</button>
    </header>
  </header>
</template>

<style scoped lang="scss">
.header {
  background-image:linear-gradient(to right, rgba(76,76,76,1) 0%, rgba(89,89,89,0.1) 12%, rgba(102,102,102,0.5) 25%, rgba(71,71,71,0.5) 39%, rgba(43,43,43,0.1) 76%, rgba(28,28,28,0.2) 91%, rgba(19,19,19,0.2) 100%), url("./../assets/img/header.png");
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
  h2 {
    font-size: 24px;
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
      author: "Metody Wytwarzania Oprograowania"
    };
  },
  methods: {
    goTo() {
      this.$router.push("/project/");
    }
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



