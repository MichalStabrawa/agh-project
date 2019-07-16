<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div>{{$route.params.id}}</div>
        <span>params {{showListId.title}}</span>
        <div>{{showListPracownik}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      par: this.$route.params.id
    };
  },
  computed: {
    showListId() {
      return this.$store.state.list[this.par - 1];
    }
  }
};
</script>

