<template>
  <div>
    <header class="project-header">
      <div class="container is-fluid">
        <h2 class="title is-1">Choice employer</h2>
      </div>
    </header>
    <div class="container is-fluid">
      <div class="data-user">
        <ul>
          <li v-for="(item,index) in user" :key="index" :value="item.userId">
            <div class="li-item">
              <span> {{item.title}}</span>
              <button class="button is-link" @click="clickId(item.userId)">Więcej</button>
            </div>
           
            
          </li>
        </ul>
      </div>
    </div>

    <p>store {{showList}}</p>
    <p>lista test {{user}}</p>
    <p class="red">{{showMen1}}</p>

    <p
      v-for="(item,index) in showJob"
      :key="index"
    >{{index+1}}:{{item.Data}} {{item.Zadanie}} {{item.Czas}}</p>
    <FooterVue />
  </div>
</template>

<script>
import FooterVue from '../../components/FooterVue';

export default {
  layout: "default",
  components: {
    FooterVue
  },
  data() {
    return {
      val: "",
      user: [
        {
          userId: 1,

          title: "User1",
          pracownik: [
            {
              Data: "01/13/2012",
              Zadanie: "Wizyta u klienta",
              Czas: "3"
            },
            {
              Data: "01/14/2012",
              Zadanie: "Podsumowanie spotkania",
              Czas: "1"
            },
            {
              Data: "01/18/2012",
              Zadanie: "Ocena wymagan przygotowanych przez Janka",
              Czas: "2"
            },
            {
              Data: "01/23/2012",
              Zadanie: "Prezentacja dla klienta",
              Czas: "2"
            },
            {
              Data: "01/24/2012",
              Zadanie: "Spotkanie po prezentacji",
              Czas: " podsumowanie i wnioski"
            },
            {
              Data: "01/25/2012",
              Zadanie: "Projekt architektury ",
              Czas: "7"
            },
            {
              Data: "01/26/2012",
              Zadanie: "",
              Czas: "3"
            },
            {
              Data: "01/26/2012",
              Zadanie: "Zabawa Erlangiem",
              Czas: "4"
            },
            {
              Data: "01/27/2012",
              Zadanie: "Testowanie Erlanga na potrzeby architektury",
              Czas: "8"
            },
            {
              Data: "01/30/2012",
              Zadanie: "Pierwszy prototyp technologiczny w Erlangu",
              Czas: "8"
            },
            {
              Data: ""
            }
          ]
        },
        {
          userId: 2,
          title: "User2"
        },
        {
          userId: 3,
          title: "User33"
        }
      ]
    };
  },
  mounted() {
    console.log(this.showList);
    console.log(this.showList);
  },
  computed: {
    showList() {
      return this.$store.state.list;
    },
    showJob() {
      return this.$store.state.pracownik;
      if (this.$store.state.pracownik.Czas === "") {
        return 0;
      }
    },
    showMen1() {
       const test1 = this.$store.state.Kowalski_Jan
      return JSON.parse(test1) ;
    }
  },
  methods: {
    clickId(id) {
      this.$router.push("/project/" + id);
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  height: 150px;
  display: flex;
  align-items: center;
  background: #000;
}
.data-user {
  padding-top: 60px;
  padding-bottom: 60px;

  li {
   

    .btn {
      margin-left: 30px;
    }
  }
  .li-item {
    display:flex;
    width: 50%;
    justify-content: space-between;
    border-bottom: 1px solid grey;
     padding-top: 15px;
    padding-bottom: 15px;
  }
}
.red {
  color: red;
}
</style>


