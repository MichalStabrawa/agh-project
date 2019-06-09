<template>
  <div>
    <div class="data-user">
      <ul>
        <li
          @click="clickId(item.userId)"
          v-for="(item,index) in user"
          :key="index"
          :value="item.userId"
        >{{item.title}}</li>
      </ul>
    </div>
    <p>val: {{ selectedValue}}</p>
    <p>{{selectedValue}}</p>
  </div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      val: '',
      user: [
        {
          userId: 1,

          title: "User1"
        },
        {
          userId: 2,
          title: "User2"
        }
      ]
    };
  },
  methods: {
    clickId() {
      // this.$router.push("/project/" + id);
      console.log(this.value);
    }
  }
};
</script>

