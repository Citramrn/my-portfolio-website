<template>
  <div id="wrap-content">
    <!-- <cursor-fx color="lawngreen"></cursor-fx> -->
    <div class="home">
      <Navbar></Navbar>
      <HorizontalDivider></HorizontalDivider>
      <div class="cards">
        <Card
          v-for="card in cards"
          :key="card.title"
          :title="card.title"
          :description="card.description"
          :emoji="card.emoji"
          :link="card.link"
        ></Card>
      </div>
      <router-link to="/">
        <button class="btn-back">Back To Home</button>
      </router-link>
      <div>
        <HorizontalDivider></HorizontalDivider>
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Navbar from "../components/Navbar.vue";
import HorizontalDivider from "../components/HorizontalDivider.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "App",
  components: {
    Card,
    Navbar,
    Footer,
    HorizontalDivider,
  },
  data() {
    return {
      projects: null,
      cards: [
        {
          title: "Label Generator Tools",
          emoji: "📦",
          description:
            "The internship project that was carried out was a label generator tool, a print label to help consumers handle labels such as online store invoices.",
          link: "https://github.com/Citramrn/label_generator.github.io",
        },
        {
          title: "Portfolio Website",
          emoji: "🙋‍♂️",
          description:
            "Developing Website My Portfolio is made in Vue.js Template By vishesh bansal and my portfolio citra mirna",
          link: "https://citramirna.netlify.app/",
        },
        {
          title: "Static Restaurant Caffe",
          emoji: "🍕",
          description:
            "Static website made from bootstrap framework with HTML and CSS slicing",
          link: "https://github.com/Citramrn/restaurant",
        },
        {
          id: 1,
          title: "Gudang strawberry",
          emoji: "🍓",
          description:
            "Strawberry Warehouse is a place for strawberry fruit producers in mica packaging, the best strawberries are directly picked and harvested.",
          link: "https://gudangstrawberry.id/",
        },
        {
          title: "The Movie",
          emoji: "🎞️",
          description: "static the movie website gets API data from MovieDB",
          link: "https://github.com/GDGVIT/vitty-backend",
        },
        {
          id: 2,
          title: "Profile Glagah Arum",
          emoji: "🎫",
          description:
            "Glagah Arum Campground is one of the tourist attractions to increase potential in the field of education.",
          link: "https://bumiglagaharum.com",
        },
      ],
    };
  },
  mounted() {
    const options = {
      bottom: "64px", // default: '32px'
      right: "unset", // default: '32px'
      left: "32px", // default: 'unset'
      time: "0.5s", // default: '0.3s'
      mixColor: "#F7F7F7", // default: '#fff'
      backgroundColor: "#1a202c", // default: '#fff'
      buttonColorDark: "#F7F7F7", // default: '#100f2c'
      buttonColorLight: "#1a202c", // default: '#fff'
      saveInCookies: true, // default: true,
      label: "🌓", // default: ''
      autoMatchOsTheme: true, // default: true
    };

    const darkmode = new Darkmode(options);
    darkmode.showWidget();

    new Darkmode(options).showWidget();
    // This will break one day
    // TODO: Use own API key
    const url =
      "https://www.behance.net/v2/users/visheshbansal/projects?client_id=ZLBxK9rEfHwJf9K0rmseNr2fS2gS2HJW";
    $.ajax({
      url: url,
      type: "get",
      data: { projects: {} },
      dataType: "jsonp",
    })
      .done((response) => {
        let data = [];
        let res = response.projects;
        console.log(response);
        for (let i = 0; i < res.length; i++) {
          data.push({
            src: res[i].covers.original,
            link: res[i].url,
            name: res[i].name,
          });
        }
        this.projects = data;
      })
      .fail((error) => {
        console.error(error);
      });
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.btn-back {
  border-radius: 4px;
  background-color: #18d26e;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 16px;
  padding: 10px;
  margin-top: 34px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
}

.btn-back:hover {
  background-color: green;
}

.right:hover {
  transform: translateY(-5px);
  transition: all ease 0.2s;
}

.right {
  margin: 5px;
  border-radius: 4px;
  background-color: #18d26e;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 16px;
  padding: 10px;
  transition: all 0.5s;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
}

.center {
  text-align: center;
}

body {
  font-family: "Roboto", sans-serif;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #2c3649;
  border-radius: 0.5rem;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #1db954;
  border-radius: 0.5rem;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: lawngreen;
}

.scroll-top {
  position: fixed;
  bottom: 15%;
  left: 85%;
  background-color: #1db954;
  border: none;
  margin-left: 2rem;
  padding: 10px;
  display: flex;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  transition: all ease 0.2s;
  z-index: 2;
}

.scroll-top:hover {
  transform: scale(1.2);
  transition: 0.5s;
  color: white;
}

.home {
  max-width: 870px;
  margin: 2rem auto;
}

.art-container {
  display: flex;
  overflow-x: scroll;
  /* -ms-overflow-style: none;  */
  /* scrollbar-width: none; */
  padding: 10px 0;
  height: min-content;
}

.art {
  font-weight: 500;
  color: white;
  font-size: 1.8rem;
  border-bottom: 10px solid green;
  line-height: 0.4;
  width: 40px;
  transition: all ease 0.3s;
}

.art:hover {
  font-size: 1.8rem;
  font-weight: 500;
  color: white;
  border-bottom: 10px solid #1db954;
  line-height: 0.4;
  width: 90px;
  transition: 0.5s;
}

@media screen and (max-width: 1500px) {
  .home {
    margin: 2rem 20rem;
  }
}

@media screen and (max-width: 1380px) {
  .home {
    margin: 2rem 15rem;
  }
}

@media screen and (max-width: 936px) {
  .home {
    margin: 2rem;
  }

  .scroll-top {
    visibility: hidden;
  }
}

@media screen and (max-width: 320px) {
  .home {
    margin: 2rem 1rem;
  }
}

.cards {
  grid-gap: 1rem;
  margin: 0 auto;
  display: grid;
  height: 320px;
}

@media screen and (max-width: 580px) {
  .cards {
    height: 315px;
  }
}

.expandedCards {
  height: 100%;
}

@media (min-width: 600px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

.rotate {
  transform: rotate(180deg);
}

.no-rotate {
  transform: rotate(0deg);
}

@media screen and (min-width: 370px) {
  .cards {
    height: 100%;
  }
}

@media screen and (min-width: 355px) {
  .cards {
    height: 100%;
  }
}

@media screen and (min-width: 900px) and (max-width: 1040px) {
  .cards {
    height: 549px;
  }
}

h2 {
  font-weight: 500;
  color: white;
  font-size: 1.8rem;
  transition: all ease 0.3s;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

svg {
  color: white;
}

.row button {
  border: none;
  padding: 10px;
  border-radius: 8px;
  background-color: #1b405e;
}

.row button:hover {
  background-color: #15334b;
  transition: background-color ease 0.2s;
  cursor: pointer;
}

.row button:focus {
  outline: none;
}
@media screen and (min-width: 200px) and (max-width: 355px) {
  .cards {
    height: 100%;
  }
}
</style>
