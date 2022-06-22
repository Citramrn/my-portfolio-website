<template>
  <div>
    <div class="row">
      <h2>Design</h2>
    </div>

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
    <router-view></router-view>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "Code",
  components: { Card },
  data() {
    return {
      cards: [
        {
          title: "UI Design Label Generator Tools",
          emoji: "🖍️",
          description:
            "Helped a little to develop UI Design as a label creation tool, print labels to help consumers handle labels such as online shop invoices.",
          link: "https://www.figma.com/file/VdfRbwOLtO3RXyGnoXUhWR/INSKUSHIP-LAST",
        },
        {
          title: "UI Design  Ishare",
          emoji: "👧",
          description:
            "Ishare adalah website jaringan sosial yang khususnya menghubungkan wanita di seluruh indonesia untuk curhat sesama teman dan mendiskusikan masalah apa saja yang mereka inginkan..",
          link: "https://www.figma.com/file/aU3Sux9PWEpGC1QPDqBuna/Bismillah",
        },
      ],
    };
    // eslint-disable-next-line no-unreachable
    isExpanded = false;
  },
  mounted() {
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: false,
        },
      },
    });
  },
};
</script>

<style scoped>
button {
  border-radius: 4px;
  background-color: green;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 16px;
  padding: 10px;
  margin-top: 34px;
  transition: all 0.5s;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
}

button:hover {
  transform: translateY(-5px);
  transition: all ease 0.2s;
}

.cards {
  grid-gap: 1rem;
  margin: 0 auto;
  display: grid;
  height: 100%;
  overflow: hidden;
}

@media screen and (max-width: 580px) {
  .cards {
    height: 100%;
  }
}

.expandedCards {
  height: 100%;
}

@media (min-width: 600px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
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

@media screen and (min-width: 900px) and (max-width: 1040px) {
  .cards {
    height: 370px;
  }
}

h3 {
  margin-top: 25px;
  color: white;
}

a {
  text-decoration: none;
}

h3:hover {
  color: green;
  transition: all ease 0.3s;
}

h2 {
  font-weight: 500;
  color: white;
  font-size: 1.8rem;
  border-bottom: 10px solid green;
  line-height: 0.4;
  width: 40px;
  transition: all ease 0.3s;
}

h2:hover {
  font-size: 1.8rem;
  font-weight: 500;
  color: white;
  border-bottom: 10px solid #1db954;
  line-height: 0.4;
  width: 100px;
  transition: 0.5s;
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
    height: 320px;
  }
}
</style>
