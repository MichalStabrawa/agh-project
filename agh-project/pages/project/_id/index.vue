<template>
  <div>
    id
    <div>{{$route.params.id}}</div>
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
  computed: {
    showData() {}
  }
};
</script>

