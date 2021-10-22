<template>
  <v-layout column justify-center align-center class="mt-4 pt-2 text-xs-center">
    <v-avatar :tile="title" :size="avatarSize" color="grey lighten-4">
      <img src="../assets/citra.png" alt="avatar" />
    </v-avatar>

    <br />

    <vue-typer class="headline" :repeat="0" text="Citra Mirna Wati"></vue-typer>
    <vue-typer
      :text="text1"
      :repeat="Infinity"
      :shuffle="false"
      initial-action="erasing"
      :pre-type-delay="70"
      :type-delay="70"
      :pre-erase-delay="1980"
      :erase-delay="150"
      erase-style="select-back"
      :erase-on-complete="false"
      caret-animation="smooth"
    ></vue-typer>
    <br />
    <v-flex xs12 sm6 md4 lg4 xl4>
      <v-card flat color="transparent" max-width="500">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">
              <span>About</span>
              <span class="green--text">Me</span>
            </h3>
            <div>
              <p>
                Hello! I'm citra Mirna Wati, I'm able to create a web from the
                front end of WordPress, HTML, CSS, SAAS, Javascript, Frameworks
                such as Bootstrap, Vue Js. I was even able to make UI/UX Design
                in Figma and Adobe Photoshop.
              </p>
            </div>
          </div>
        </v-card-title>

        <v-card-actions class="hidden-sm-and-down cards">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            fab
            dark
            outline
            color="green"
            :href="icon.href"
            target="_blank"
          >
            <v-icon dark>{{ icon.icon }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-card-actions class="hidden-md-and-up cards">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            small
            fab
            dark
            outline
            color="green"
            :href="icon.href"
            target="_blank"
          >
            <v-icon dark>{{ icon.icon }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { VueTyper } from "vue-typer";
import VueCompareImage from "vue-compare-image";
export default {
  metaInfo: {
    title: "Home",
    titleTemplate: "%s | Citra Mirna",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "Citra Mirna Portfolio" },
      { charset: "utf-8" },
      { property: "og:title", content: "Citra Mirna" },
      { property: "og:site_name", content: "Citra Mirna" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://citramrn.github.io" },
    ],
  },
  components: {
    "vue-typer": VueTyper,
    VueCompareImage,
  },
  data() {
    return {
      slider: 250,
      icons: [
        { href: "https://github.com/Citramrn", icon: "fab fa-github" },
        {
          href: "https://www.linkedin.com/in/citra-mirna-786999199/",
          icon: "fab fa-linkedin-in",
        },
        {
          href: "https://www.behance.net/citramirna",
          icon: "fab fa-behance",
        },
      ],
      text1: ["Front-End Developer", "UI Designer"],
      sliderLine: 0,
      hSize: 0,
      sliderPosition: 0.5,
    };
  },
  computed: {
    avatarSize() {
      return `${this.slider}px`;
    },
  },
};
</script>

<style>
.img {
  background-image: url(../assets/citra.png);
  background-size: cover;
}
.cards {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
